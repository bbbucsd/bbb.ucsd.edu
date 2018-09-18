import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import _ from 'lodash';

class SchemaArticle extends Component {

  getField(slice, field) {
    let jsonField = "";
    if (slice && slice.primary && slice.primary[`schema_article_${field}`]) {
      jsonField = slice.primary[`schema_article_${field}`];
    }
    return jsonField.toString();
  }

  getTitle(frontMatter) {
    let title;
    if (frontMatter && frontMatter.site_title) {
      title = frontMatter.site_title;
    }
    return title || "";
  }

  getUrl(slice) {
    let url = "";
    if (slice && slice.schema_article_url) {
      url = slice.schema_article_url.url;
    }

    return url;
  }

  getImages(slice) {
    let images = [];
    if (slice && slice.items && slice.items.length) {
      slice.items.forEach((item) => {
        if (item.schema_article_image) {
          images.push(
            item.schema_article_image.url
          );
        }
      });
    }

    return images;
  }

  setDescription(config, slice, frontMatter) {
    let metaDescription = config.metaDescription;
    if (slice && slice.schema_article_description) {
      metaDescription = slice.schema_article_description;
    } else if(frontMatter.meta_description) {
      metaDescription = frontMatter.meta_description;
    } else {
      metaDescription = config.metaDescription;
    }

    if (metaDescription) {
      return JSON.stringify(metaDescription);
    } else {
      return "";
    }
  }

  render() {
    const { type, location, document } = this.props;
    if (type === "post") {
      const { first_publication_date, last_publication_date } = document;
      const slices = document.data.body1;

      let slice = _.find(slices, (s) => s.__typename === "SchemaArticle");
      let frontMatter = _.find(slices, (s) => s.__typename === "FrontMatter") || {};
      if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

      return (
        <Fragment>
          <StaticQuery
            query={graphql`
              query SchemaArticleQuery {
                site {
                  siteMetadata {
                    metaDescription
                    schemaOrganization {
                      name
                      logo
                    }
                  }
                }
              }
          `}
          render={data => {
            const config = data.site.siteMetadata;
            return (
              <Helmet>
               <script type="application/ld+json">{`
                  {
                    "@context": "http://schema.org",
                    "@type": "NewsArticle",
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "${location.href}"
                    },
                    "headline": "${this.getField(slice, "headline") || this.getTitle(frontMatter)}",
                    "image": "${this.getImages(slice)}",
                    "datePublished": "${first_publication_date}",
                    "dateModified": "${last_publication_date}",
                    "author": {
                      "@type": "Person",
                      "name": ${this.getField(slice, "author")}
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "${config.schemaOrganization.name}",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "${config.schemaOrganization.logo}"
                      }
                    },
                    "description": ${this.setDescription(config, slice, frontMatter)}
                  };
              `}</script>
              </Helmet>
            )
          }}
        />
      </Fragment>
      )
    } else {
      return null;
    }
  }
}


export default SchemaArticle;

export const query = graphql`
  fragment SchemaArticle on SchemaArticle {
    __typename
    primary {
      schema_article_headline
      schema_article_author
      schema_article_description
    }
    items {
      schema_article_image {
        url
      }
    }
  }
`;

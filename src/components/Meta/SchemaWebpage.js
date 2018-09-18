import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import titlize from 'utils/titlize';
import _ from 'lodash';

class SchemaWebpage extends Component {

  getName(slice, location) {
    if (slice && slice.schema_webpage_headline) {
      return slice.schema_webpage_headline;
    } else {
      return titlize(location.pathname.split('/').slice(-1)[0]);
    }
  }

  getHeadline(slice, location) {
    let jsonField
    if (slice && slice.primary && slice.primary[`schema_webpage_headline`]) {
      jsonField = slice.primary[`schema_webpage_headline`];
    }
    if (jsonField) {
      return jsonField.toString();
    } else {
      return this.getName(slice, location);
    }
  }

  getField(slice, field) {
    let jsonField
    if (slice && slice.primary && slice.primary[`schema_webpage_${field}`]) {
      jsonField = slice.primary[`schema_webpage_${field}`];
    }
    if (jsonField) {
      return jsonField.toString();
    } else {
      return "";
    }
  }

  getSignificantUrl(slice) {
    let url;
    if (slice && slice.schema_webpage_significant_url) {
      url = slice.schema_webpage_significant_url.url;
    }

    if (url) {
      return url;
    } else {
      return "";
    }
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

  buildListItem(position, url, name) {
    return {
      "@type": "ListItem",
      "position": position,
      "item": {
        "@id": url,
        "name": name,
      }
    };
  }

  getBreadcrumbs(config, slice, location) {
    let breadcrumbs = [];
    if (slice && slice.items && slice.items.length) {
      slice.items.forEach((item) => {
        if (item.schema_webpage_breadcrumb_position && item.schema_webpage_breadcrumb_url && item.schema_webpage_breadcrumb_name) {
          breadcrumbs.push(this.buildListItem(
            item.schema_webpage_breadcrumb_position,
            item.schema_webpage_breadcrumb_url.url,
            item.schema_webpage_breadcrumb_name
          ));
        }
      });
    } else {
      let previousUrl = config.siteUrl;
      _.forEach(location.pathname.split("/"), (item, index) => {
        previousUrl = previousUrl.replace(/\/$/, "");
        if (item === "") {
          breadcrumbs.push(this.buildListItem(
            1,
            previousUrl,
            config.siteName
          ));
        } else {
          breadcrumbs.push(this.buildListItem(
            index + 1,
            `${previousUrl}/${item}`,
            titlize(item)
          ));
        }
        previousUrl = `${previousUrl}/${item}`;
      });
    }

    return JSON.stringify(breadcrumbs);
  }

  render() {
    const { location, document } = this.props;
    if (location.pathname !== "/") {
      const slices = document.data.body1;

      let slice = _.find(slices, (s) => s.__typename === "SchemaWebpage");
      let frontMatter = _.find(slices, (s) => s.__typename === "FrontMatter") || {};
      if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

      return (
        <Fragment>
          <StaticQuery
            query={graphql`
              query SchemaWebpageQuery {
                site {
                  siteMetadata {
                    metaDescription
                    siteName
                    siteUrl
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
                  "@type": "WebPage",
                  "headline": "${this.getHeadline(slice, location)}",
                  "name": "${this.getName(slice, location)}",
                  "significantUrl": "${this.getSignificantUrl(slice)}",
                  "description": ${this.setDescription(config, slice, frontMatter)},
                  "breadcrumb": {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": ${this.getBreadcrumbs(config, slice, location)}
                  }
                }
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

export default SchemaWebpage;

export const query = graphql`
  fragment SchemaWebpage on SchemaWebpage {
    __typename
    primary {
      schema_webpage_headline
      schema_webpage_significant_url {
        url
      }
    }
    items {
      schema_webpage_breadcrumb_name
      schema_webpage_breadcrumb_position
      schema_webpage_breadcrumb_url {
        url
      }
    }
  }
`;

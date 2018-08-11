import React, { Component } from 'react';
import Config from '../../config';
import _ from 'lodash';

class SchemaArticle extends Component {

  getField(slice, field) {
    let jsonField = "";
    if (slice && slice.primary && slice.primary[`schema_article_${field}`]) {
      jsonField = slice.primary[`schema_article_${field}`];
    }
    return jsonField.toString();
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

  render() {
    return null;
    const { slice } = this.props;
    const { first_publication_date, last_publication_date, meta_description } = slice;

    let schema = {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": Config.get("currentUrl")
      },
      "headline": this.getField(slice, "headline"),
      "image": this.getImages(slice),
      "datePublished": first_publication_date,
      "dateModified": last_publication_date,
      "author": {
        "@type": "Person",
        "name": this.getField(slice, "author")
      },
      "publisher": {
        "@type": "Organization",
        "name": Config.get("schemaOrganization").name,
        "logo": {
          "@type": "ImageObject",
          "url": Config.get("schemaOrganization").logo
        }
      },
      "description": meta_description || Config.get("metaDescription")
    };
    return (
      <script>
        {JSON.stringify(schema)}
      </script>
    )
  }
}


export default SchemaArticle;

 export const query = graphql`
   fragment SchemaArticle on SchemaArticle {
     __typename
     primary {
       schema_article_headline
       schema_article_author
     }
     items {
       schema_article_image {
         url
       }
     }
   }
 `;

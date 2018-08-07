import React, { Component } from 'react';
import Config from '../../../config';
import Helmet from 'react-helmet';
import _ from 'lodash';

class SchemaWebpage extends Component {

  getField(slice, field) {
    let jsonField = "";
    if (slice && slice.primary && slice.primary[`schema_webpage_${field}`]) {
      jsonField = slice.primary[`schema_webpage_${field}`];
    }
    return jsonField.toString();
  }

  getSignificantUrl(slice) {
    let url = "";
    if (slice && slice.schema_webpage_significant_url) {
      url = slice.schema_webpage_significant_url.url;
    }

    return url;
  }

  getBreadcrumbs(slice) {
    let breadcrumbs = [];
    if (slice && slice.items && slice.items.length) {
      slice.items.forEach((item) => {
        if (item.schema_webpage_breadcrumb_position && item.schema_webpage_breadcrumb_url && item.schema_webpage_breadcrumb_name) {
          breadcrumbs.push({
            "@type": "ListItem",
            "position": item.schema_webpage_breadcrumb_position,
            "item": {
              "@id": item.schema_webpage_breadcrumb_url.url,
              "name": item.schema_webpage_breadcrumb_name,
            }
          });
        }
      });
    }

    return breadcrumbs;
  }

  render() {
    const { slice } = this.props;
    const { name, meta_description } = this.props.page;

    let schema = {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "headline": this.getField(slice.primary, "headline"),
      "name": name && name.text,
      "significantUrl": this.getSignificantUrl(slice),
      "description": meta_description || Config.get("metaDescription"),
      "breadcrumb": {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": this.getBreadcrumbs(slice)
      }
    };
    return (
      <Helmet>
        <script>
          {JSON.stringify(schema)}
        </script>
      </Helmet>
    )
  }
}


export default SchemaWebpage;

 export const query = graphql`
   fragment SchemaWebpage on PrismicPageBody2SchemaWebpage {
     slice_type
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

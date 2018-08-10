import React, { Component } from 'react';
import Config from '../../config';
import Helmet from 'react-helmet';
import _ from 'lodash';

class SchemaProduct extends Component {

  getField(slice, field) {
    let jsonField = "";
    if (slice && slice[`schema_product_${field}`]) {
      jsonField = slice[`schema_product_${field}`];
    }
    return jsonField.toString();
  }

  getImage(slice) {
    let url = "";
    if (slice && slice.schema_product_image) {
      url = slice.schema_product_image.url;
    }

    return url;
  }

  getSameAs(slice) {
    let sameAs = [];
    if (slice && slice.items && slice.items.length) {
      slice.items.forEach((item) => {
        if (item.schema_product_same_as_link) {
          sameAs.push(
            item.schema_product_same_as_link.url
          );
        }
      });
    }

    return sameAs;
  }

  render() {
    let { slice } = this.props;
    slice = slice.primary;

    let schema = {
      "@context": "http://schema.org",
      "@type": "Product",
      "@id": "#product",
      "name": this.getField(slice, "name"),
      "url": Config.get("currentUrl"),
      "image": this.getImage(slice),
      "description": this.getField(slice, "description"),
      "sku": this.getField(slice, "sku"),
      "sameAs": this.getSameAs(slice),
      "brand": {
        "@type": "Thing",
        "name": Config.get("schemaOrganization").name
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": this.getField(slice, "rating_value"),
        "reviewCount": this.getField(slice, "rating_count")
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": this.getField(slice, "price"),
        "itemCondition": "http://schema.org/NewCondition",
        "availability": "http://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": Config.get("schemaOrganization").name
        }
      }
    };
    return (
      <script>
        {JSON.stringify(schema)}
      </script>
    )
  }
}


export default SchemaProduct;

 export const query = graphql`
   fragment SchemaProduct on SchemaProduct {
     __typename
     primary {
       schema_product_name
       schema_product_price
       schema_product_description
       schema_product_rating_value
       schema_product_rating_count
       schema_product_sku
       schema_product_image {
         url
       }
     }
     items {
       schema_product_same_as_link {
         url
       }
     }
   }
 `;

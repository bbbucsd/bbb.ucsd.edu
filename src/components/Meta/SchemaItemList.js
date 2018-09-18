import React, { Component } from 'react';
import { graphql } from 'gatsby';

class SchemaItemList extends Component {

  getItems(slice) {
    let items = [];
    if (slice && slice.items && slice.items.length) {
      slice.items.forEach((item) => {
        if (item.schema_item_list_position && item.schema_item_list_url) {
          items.push({
            "@type": "ListItem",
            "position": item.schema_item_list_breadcrumb_position,
            "url": item.schema_item_list_url.url
          });
        }
      });
    }

    return items;
  }

  render() {
    let slice = _.find(slices, (s) => s.__typename === "SchemItemList")
    if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }
    return (
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "ItemList",
            "itemListElement": ${this.getItems(slice)}
          };
       `}</script>
      </Helmet>
    )
  }
}


export default SchemaItemList;

 export const query = graphql`
   fragment SchemaItemList on SchemaItemList {
     __typename
     items {
       schema_item_list_position
       schema_item_list_url {
         url
       }
     }
   }
 `;

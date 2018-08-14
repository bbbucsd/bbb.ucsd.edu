import React, { Component } from 'react';
import State from '../../state';
import _ from 'lodash';

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
    const { slice } = this.props;

    let schema = {
      "@context": "http://schema.org",
      "@type": "ItemList",
      "itemListElement": this.getItems(slice)
    };
    return (
      <script>
        {JSON.stringify(schema)}
      </script>
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

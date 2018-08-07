import React, { Component } from 'react';
import Config from '../../../../config';
import Helmet from 'react-helmet';
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
      <Helmet>
        <script>
          {JSON.stringify(schema)}
        </script>
      </Helmet>
    )
  }
}


export default SchemaItemList;

 export const query = graphql`
   fragment SchemaItemList on PrismicPageBody2SchemaItemList {
     slice_type
     items {
       schema_item_list_position
       schema_item_list_url {
         url
       }
     }
   }
 `;

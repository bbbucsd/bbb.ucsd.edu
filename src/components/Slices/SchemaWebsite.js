import React, { Component } from 'react';
import State from '../../state';
import Helmet from 'react-helmet';
import _ from 'lodash';

class SchemaWebsite extends Component {

  getPotentialAction(slice) {
    let action = {};
    if (slice && slice.schema_website_search_url) {
      let url = "";
      url = slice.schema_website_search_url.url;
      url += "?q={search_term_string}";
      action = {
        "@type": "SearchAction",
        "target": url,
        "query-input": "required name=search_term_string"
      };
    }

    return action;
  }

  render() {
    const { slice } = this.props;
    const { name, meta_description } = this.props.page;

    let schema = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": State.get("currentUrl"),
      "potentialAction": this.getPotentialAction(slice)
    };
    return (
      <script>
        {JSON.stringify(schema)}
      </script>
    )
  }
}


export default SchemaWebsite;

 export const query = graphql`
   fragment SchemaWebsite on SchemaWebsite {
     __typename
     primary {
       schema_website_search_url {
         url
       }
     }
   }
 `;

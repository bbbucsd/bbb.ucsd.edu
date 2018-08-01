import React, { Component } from 'react';
import Config from 'config';
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
      "url": Config.get("currentUrl"),
      "potentialAction": this.getPotentialAction(slice)
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


export default SchemaWebsite;

 export const query = graphql`
   fragment SchemaWebsite on PrismicPageBody2SchemaWebsite {
     slice_type
     primary {
       schema_website_search_url {
         url
       }
     }
   }
 `;

import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

class SchemaWebsite extends Component {

  getPotentialAction(searchUrl) {
    let action = {};
    if (searchUrl) {
      let url = searchUrl;
      url += "?q={search_term_string}";
      action = {
        "@type": "SearchAction",
        "target": url,
        "query-input": "required name=search_term_string"
      };
    }

    return JSON.stringify(action);
  }
  render() {
    const { location } = this.props;
    if (location.pathname === "/") {
      return (
        <Fragment>
          <StaticQuery
            query={graphql`
            query SchemaWebsiteQuery {
              site {
                siteMetadata {
                  searchUrl
                }
              }
            }
          `}
          render={data => {
            let config = data.site.siteMetadata;
            return (
              <Helmet>
                <script type="application/ld+json">{`
                 {
                   "@context": "http://schema.org",
                   "@type": "WebSite",
                   "url": "${location.href}",
                   "potentialAction": ${this.getPotentialAction(config.searchUrl)}
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

export default SchemaWebsite;

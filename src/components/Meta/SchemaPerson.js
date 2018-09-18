import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

class SchemaPerson extends Component {

  getField(config, field) {
    return JSON.stringify(config.schemaPerson[field]);
  }

  render() {
    return (
      <Fragment>
        <StaticQuery
          query={graphql`
          query SchemaPersonQuery {
            site {
              siteMetadata {
                schemaPerson {
                  name
                  url
                  image
                  sameAs
                }
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
                "@type": "Person",
                "@id": "#person",
                "name": ${this.getField(config, "name")},
                "url": ${this.getField(config, "url")},
                "image": ${this.getField(config, "image")},
                "sameAs": ${this.getField(config, "sameAs")}
               }
             `}</script>
           </Helmet>
           )
          }}
        />
      </Fragment>
    )
  }
}

export default SchemaPerson;

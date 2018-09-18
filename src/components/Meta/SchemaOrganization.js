import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

class SchemaOrganization extends Component {

  getField(config, field) {
    return config.schemaOrganization[field];
  }

  getContactPoints(config) {
    const contacts = [];
    (config.schemaOrganization.contacts || []).forEach(contact => {
      if (contact.phone) {
        contacts.push({
          "@type": "ContactPoint",
          "telephone": contact.phone,
          "contactType": contact.type,
          "contactOption": "TollFree",
          "areaServed": contact.areaServed
        });
      }
    });

    return JSON.stringify(contacts);
  }

  render() {
    const { location } = this.props;
    if (location.pathname === "/") {
      return (
        <Fragment>
          <StaticQuery
            query={graphql`
            query SchemaOrganizationQuery {
              site {
                siteMetadata {
                  schemaOrganization {
                    name
                    url
                    logo
                    street
                    city
                    state
                    zip
                    country
                    email
                    description
                    foundingDate
                    sameAs
                    contacts {
                      phone
                      type
                      areaServed
                    }
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
                   "@type": "Organization",
                   "@id": "#organization",
                   "name": "${this.getField(config, "name")},
                   "url": "${this.getField(config, "url")},
                   "logo": "${this.getField(config, "logo")},
                   "email": "${this.getField(config, "email")},
                   "description": "${this.getField(config, "description")}",
                   "foundingDate": "${this.getField(config, "foundingDate")}",
                   "address": {
                     "@type": "PostalAddress",
                     "streetAddress": "${this.getField(config, "street")}",
                     "addressLocality": "${this.getField(config, "city")}",
                     "addressRegion": "${this.getField(config, "state")}",
                     "addressCountry": "${this.getField(config, "country")}",
                     "postalCode": "${this.getField(config, "zip")}"
                   },
                   "sameAs": "${this.getField(config, "sameAs")}",
                   "contactPoint": ${this.getContactPoints(config)}
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


export default SchemaOrganization;

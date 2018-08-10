import React, { Component } from 'react';
import Config from '../../config';
import Helmet from 'react-helmet';
import _ from 'lodash';
import moment from "moment";

class SchemaOrganization extends Component {

  getName(slice) {
    let name = null;
    if (slice && slice.schema_organization_name) {
      name = slice.schema_organization_name;
    } else {
      name = Config.get("schemaOrganization").name;
      if (_.isEmpty(name)) {
        name = null;
      }
    }
    return name;
  }

  getUrl(slice) {
    let url = "";
    if (slice && slice.schema_organization_url) {
      url = slice.schema_organization_url.url;
    } else {
      url = Config.get("schemaOrganization").url;
    }

    return url;
  }

  getLogo(slice) {
    let url = "";
    if (slice && slice.schema_organization_logo) {
      url = slice.schema_organization_logo.url;
    } else {
      url = Config.get("schemaOrganization").logo;
    }

    return url;
  }

  getFoundingDate(slice) {
    let date = "";
    if (slice && slice.schema_organization_founding_date) {
      date = slice.schema_organization_founding_date
    } else {
      date = Config.get('schemaOrganization').foundingDate;
    }

    if (!_.isEmpty(date)) {
      date = moment(date).toISOString();
    }

    return date;
  }

  getField(slice, field) {
    let jsonField;
    if (slice && slice[`schema_organization_${field}`]) {
      jsonField = slice[`schema_organization_${field}`];
    } else {
      jsonField = Config.get("schemaOrganization")[field];
    }

    jsonField = jsonField || "";
    return jsonField;
  }

  getContactPoints() {
    const contacts = [];
    (Config.get("schemaOrganization").contacts || []).forEach(contact => {
      contacts.push({
        "@type": "ContactPoint",
        "telephone": contact.phone,
        "contactType": contact.type,
        "contactOption": "TollFree",
        "areaServed": contact.areaServed
      });
    });

    return contacts;
  }

  getSameAs(slice) {
    let sameAs = [];
    if (slice && slice.items && slice.items.length) {
      slice.items.forEach((item) => {
        if (item.schema_organization_same_as_link) {
          sameAs.push(
            item.schema_organization_same_as_link.url
          );
        }
      })
    } else {
      sameAs = Config.get("schemaOrganization").sameAs;
    }

    return sameAs;
  }

  render() {
    const { slices } = this.props;

    let slice = _.find(slices, (s) => s.slice_type === "schema___organization");
    if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

    const name = this.getName(slice);

    if (name) {
      let schema = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "@id": "#organization",
        "name": name,
        "url": this.getUrl(slice),
        "logo": this.getLogo(slice),
        "email": this.getField(slice, "email"),
        "description": this.getField(slice, "description"),
        "foundingDate": this.getFoundingDate(slice),
        "address": {
          "@type": "PostalAddress",
          "streetAddress": this.getField(slice, "street"),
          "addressLocality": this.getField(slice, "city"),
          "addressRegion": this.getField(slice, "state"),
          "addressCountry": this.getField(slice, "country"),
          "postalCode": this.getField(slice, "zip")
        },
        "sameAs": this.getSameAs(slice),
        "contactPoint": this.getContactPoints()
      };
      return (
        <script>
          {JSON.stringify(schema)}
        </script>
      )
    } else {
      return null;
    }
  }
}


export default SchemaOrganization;

 export const query = graphql`
   fragment SchemaOrganization on SchemaOrganization {
     __typename
     primary {
       schema_organization_name
       schema_organization_url {
         url
       }
       schema_organization_logo {
         url
       }
       schema_organization_street
       schema_organization_city
       schema_organization_state
       schema_organization_zip
       schema_organization_country
       schema_organization_email
       schema_organization_description
       schema_organization_founding_date
     }
     items {
       schema_organization_same_as_link {
         url
       }
     }
   }
 `;

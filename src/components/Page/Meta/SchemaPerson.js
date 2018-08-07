import React, { Component } from 'react';
import Config from '../../../config';
import Helmet from 'react-helmet';
import _ from 'lodash';

class SchemaPerson extends Component {

  getName(slice) {
    let name = null;
    if (slice && slice.schema_person_name) {
      name = slice.schema_person_name;
    } else {
      name = Config.get("schemaPerson").name;
      if (_.isEmpty(name)) {
        name = null;
      }
    }
    return name;
  }

  getUrl(slice) {
    let url = "";
    if (slice && slice.schema_person_url) {
      url = slice.schema_person_url.url;
    } else {
      url = Config.get("schemaPerson").url;
    }

    return url;
  }

  getImage(slice) {
    let url = "";
    if (slice && slice.schema_person_image) {
      url = slice.schema_person_image.url;
    } else {
      url = Config.get("schemaPerson").image;
    }

    return url;
  }

  getSameAs(slice) {
    let sameAs = [];
    if (slice && slice.items && slice.items.length) {
      slice.items.forEach((item) => {
        if (item.schema_person_same_as_link) {
          sameAs.push(
            item.schema_person_same_as_link.url
          );
        }
      })
    } else {
      sameAs = Config.get("schemaPerson").sameAs;
    }

    return sameAs;
  }

  render() {
    const { slices } = this.props;

    let slice = _.find(slices, (s) => s.slice_type === "schema___person");
    if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

    const name = this.getName(slice);

    if (name) {
      let schema = {
        "@context": "http://schema.org",
        "@type": "Person",
        "@id": "#person",
        "name": name,
        "url": this.getUrl(slice),
        "image": this.getImage(slice),
        "sameAs": this.getSameAs(slice),
      };
      return (
        <Helmet>
          <script>
            {JSON.stringify(schema)}
          </script>
        </Helmet>
      )
    } else {
      return null;
    }
  }
}


export default SchemaPerson;

 export const query = graphql`
   fragment SchemaPerson on PrismicPageBody2SchemaPerson {
     slice_type
     primary {
       schema_person_name
       schema_person_url {
         url
       }
       schema_person_image {
         url
       }
     }
     items {
       schema_person_same_as_link {
         url
       }
     }
   }
 `;

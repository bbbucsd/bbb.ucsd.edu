import React, { Component } from 'react';
import Helmet from 'react-helmet';

class SchemaPerson extends Component {

  render() {
    return (
      <Helmet>
        <script>
          {/* JSON.stringify() */}
        </script>
      </Helmet>
    )
  }
}


export default SchemaPerson;

// TODO: Implement dummy data
// export const query = graphql`
//   fragment SchemaPerson on PrismicPageBody2SchemaPerson {
//     slice_type
//     primary {
//       schema_person_url {
//         url
//       }
//       schema_person_name
//     }
//   }
// `;

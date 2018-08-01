import React, { Component } from 'react';
import StandardForm from './StandardForm';

class Modal extends Component {

  render(slice) {
    if(
      this.props.data &&
      this.props.data.document &&
      this.props.data.document[0] &&
      this.props.data.document[0].__typename === "PrismicModal" &&
      this.props.data.document[0].data.body.length === 1
    ) {
      const slice = this.props.data.document[0].data.body[0];
      switch (slice.slice_type) {
        case 'standard_form':
          return <StandardForm open={this.props.open} onClose={this.props.onClose} slice={slice} />
        default:
          return null;
      };
    } else {
      return null;
    }
  };

}


export default Modal;

export const query = graphql`
  fragment Modal on PrismicModal {
    uid
    data {
      body {
        slice_type
        ...StandardForm
      }
    }
  }
`;

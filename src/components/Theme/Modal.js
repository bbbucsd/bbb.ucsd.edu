import React, { Component } from 'react';
import { navigateTo } from "gatsby-link"

class Modal extends Component {
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div onClose={() => window.___history.push(this.props.location.state.page, { cameFromModal: true } )} {...this.props}>
        <div>
          {this.props.children({
            location: { pathname: this.props.location.pathname },
          })}
        </div>
      </div>
    )
  };

}


export default Modal;

// export const query = graphql`
//   fragment Modal on PrismicModal {
//     uid
//     data {
//       body {
//         slice_type
//       }
//     }
//   }
// `;
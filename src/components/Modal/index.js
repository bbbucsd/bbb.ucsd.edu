import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { navigateTo } from "gatsby-link"

class Modal extends Component {
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog onClose={() => window.___history.push(this.props.location.state.page, { cameFromModal: true } )} {...this.props}>
        <DialogContent>
          {this.props.children({
            location: { pathname: this.props.location.pathname },
          })}
        </DialogContent>
      </Dialog>
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

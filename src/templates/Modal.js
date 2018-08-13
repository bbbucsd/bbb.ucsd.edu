import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';

class Modal extends Component {
  renderMeta() {
    if (!this.props.location.state || !this.props.location.state.isInModal) {
      return (
        <meta name="robots" content="noindex,noarchive" />
      );
    }
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          {this.renderMeta()}
        </Helmet>
        <div>Hello World</div>
      </Fragment>
    );
  }
}

export default Modal;

export const modalQuery = graphql`
  query ModalQuery($uid: String!) {
    modal(uid: { eq: $uid }) {
      uid
    }
  }
`

import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import Slices from 'components/Slices';
import State from '../state';

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
        {State.get('currentUrl').match(this.props.location.pathname) ? (
          <Helmet>
            {this.renderMeta()}
          </Helmet>
        ) : null}
        <Slices document={this.props.data.modal} />
      </Fragment>
    );
  }
}

export default Modal;

export const modalQuery = graphql`
  query ModalQuery($uid: String!) {
    modal(uid: { eq: $uid }) {
      uid
      data {
        body {
          ...DoubleColumnContentForm
        }
      }
    }
  }
`

import React, { Fragment, Component } from 'react';
import PrismicHelper from 'utils/prismicHelper';
import Link from 'gatsby-link';
import Validator from 'utils/validator';
import Modal from 'components/Theme/Modal';
import State from '../../state';
import _ from 'lodash';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideModal: true
    };
  }

  buildAttrs() {
    var href = this.sanitizeDataSource(this.props.to || '#');
    return this.linkTo(href);
  }

  sanitizeDataSource(to) {
    return typeof to === 'object' ? PrismicHelper.linkResolver(to) : to;
  }

  linkTo(href) {
    if (Validator.isPageLink(href)) {
      return this.linkToPage(href);
    } else if (Validator.isExternalSite(href)) {
      return this.linkToExternal(href);
    } else if (Validator.isModalLink(href)) {
      return this.linkToModal(href);
    } else {
      return this.linkToExplicit(href);
    }
  }

  linkToPage(href) {
    return {...this.props, to: href.replace('page://', '/') };
  }

  linkToExternal(href) {
    return {...this.props, href: href, target: '_blank', rel: 'noopener', isExternal: true};
  }

  linkToModal(href) {
    return {...this.props, href: href.replace('modal://', '#'), isModal: true };
  }

  linkToExplicit(href) {
    return {...this.props, to: href};
  }

  currentPath() {
    if (typeof window === 'object') {
      return window.location.pathname;
    }
  }

  showModal() {
    this.setState({ hideModal: false });
  }

  onClose() {
    this.setState({ hideModal: true });
  }

  render() {
    const attrs = _.omit(this.buildAttrs(), 'floating') // used as prop in header, gatsby link whines about it

    if (attrs.isModal) {
      delete attrs.isModal;
      return (
        <Fragment>
          <a onClick={this.showModal.bind(this)} {...attrs}>{this.props.children}</a>
          <Modal hidden={this.state.hideModal} onClose={this.onClose.bind(this)} location={{hash: attrs.href }}>
            {State.get('children')}
          </Modal>
        </Fragment>
      );
    } else if(attrs.isExternal) {
      delete attrs.isExternal;
      return ( <a {...attrs}>{this.props.children}</a> )
    } else {
      return ( <Link {...attrs}>{this.props.children}</Link> )
    }
  }
}

export const query = graphql`
  fragment Link on Node {
    ... on Page {
      uid
      data {
        parent {
          document {
            uid
          }
        }
      }
    }
    ... on Modal {
      uid
    }
    ... on Category {
      uid
    }
    ... on Post {
      uid
      data {
        category {
          document {
            uid
          }
        }
      }
    }
    ... on Product {
      uid
      data {
        category {
          document {
            uid
          }
        }
      }
    }
  }
`;

import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby';
import { Portal } from 'react-portal';
import PrismicHelper from 'utils/prismicHelper';
import titlize from 'utils/titlize';
import Link from 'gatsby-link';
import Validator from 'utils/validator';
import Modal from 'components/Theme/Modal';
import { actionDispatch } from 'airlytics';
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
    return {...this.props, to: href.replace('page://', '/').replace(/https:\/\/automateyourbrand.com/g, '') };
  }

  linkToExternal(href) {
    return {...this.props, href: href, target: '_blank', rel: 'noopener', isExternal: true};
  }

  linkToModal(href) {
    return {...this.props, href: href.replace('modal://', '#'), isModal: true };
  }

  linkToExplicit(href) {
    return {...this.props, href: href, isExplicit: true };
  }

  currentPath() {
    if (typeof window === 'object') {
      return window.location.pathname;
    }
  }

  showModal(href) {
    const actions = actionDispatch();
    actions.track("Modal Open", {
      name: titlize(href.replace('#', '').replace("-", " "))
    });
    this.setState({ hideModal: false });
  }

  onClose() {
    this.setState({ hideModal: true });
  }

  render() {
    const attrs = _.omit(this.buildAttrs(), 'floating', 'color') // used as prop in header, gatsby link whines about it

    if (attrs.isModal) {
      delete attrs.isModal;
      delete attrs.to;
      return (
        <Fragment>
          <a onClick={() => { this.showModal(attrs.href) }} {...attrs}>{this.props.children}</a>
          <Portal>
            <Modal hidden={this.state.hideModal} onClose={this.onClose.bind(this)} location={{hash: attrs.href }} />
          </Portal>
        </Fragment>
      );
    } else if(attrs.isExternal || attrs.isExplicit) {
      delete attrs.isExternal;
      delete attrs.isExplicit;
      delete attrs.to;
      return ( <a {...attrs}>{this.props.children}</a> )
    } else {
      if (attrs.target) {
        attrs.href = _.clone(attrs.to);
        delete attrs.to;
        return ( <a {...attrs}>{this.props.children}</a> )
      } else {
        attrs.to = attrs.to.replace("https://automateyourbrand.com", "");
        return ( <Link {...attrs}>{this.props.children}</Link> )
      }
    }
  }
}

export const query = graphql`
  fragment Link on Node {
    ... on Page {
      uid
      type
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
      type
    }
    ... on Category {
      uid
      type
      data {
        parent {
          document {
            uid
          }
        }
      }
    }
    ... on Post {
      uid
      type
      data {
        category {
          document {
            uid
            type
          }
        }
      }
    }
  }
`;

import React, { Component } from 'react';
import PrismicHelper from 'utils/prismicHelper'
import GatsbyLink from 'gatsby-link'
import Validator from 'utils/validator';
import _ from 'lodash';

class Link extends Component {

  buildAttrs() {
    var href = this.sanitizeDataSource(this.props.to || '#')
    return this.linkTo(href)
  }

  sanitizeDataSource(to) {
    return typeof to === 'object' ? PrismicHelper.linkResolver(to) : to
  }

  linkTo(href) {
    if (Validator.isPageLink(href)) {
      return this.linkToPage(href)
    } else if (Validator.isExternalSite(href)) {
      return this.linkToExternal(href)
    } else if (Validator.isModalLink(href)) {
      return this.linkToModal(href)
    } else {
      return this.linkToExplicit(href)
    }
  }

  linkToPage(href) {
    return {...this.props, to: href.replace('page://', '/') }
  }

  linkToExternal(href) {
    return {...this.props, href: href, target: '_blank', rel: 'noopener' }
  }

  linkToModal(href) {
    return {...this.props, to: {pathname: href.replace('modal://', '/_'), state: { isInModal: true, page: this.currentPath()  } } }
  }

  linkToExplicit(href) {
    return {...this.props, to: href}
  }

  currentPath() {
    if (typeof window === 'object') {
      return window.location.pathname
    }
  }

  render() {
    const attrs = _.omit(this.buildAttrs(), 'floating') // used as prop in header, gatsby link whines about it

    if (attrs.href) {
      return ( <a {...attrs}>{this.props.children}</a> )
    } else {
      return ( <GatsbyLink {...attrs}>{this.props.children}</GatsbyLink> )
    }
  }
}

export default Link;

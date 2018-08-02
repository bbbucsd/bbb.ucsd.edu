import React, { Component } from 'react';
import PrismicHelper from 'utils/prismicHelper'
import GatsbyLink from 'gatsby-link'
import { Link as ReactLink } from 'react-router-dom'
import Validator from 'utils/validator';

class Link extends Component {

  componentWillReceiveProps(props) {
    this.attrs = {...props}
  }

  buildAttrs() {
    var href = this.sanitizeDataSource(this.props.to)
    return this.linkTo(href)
  }

  sanitizeDataSource(to) {
    return typeof to === 'object' ? PrismicHelper.linkResolver(this.props.to) : to
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
    return {...this.attrs, to: href.replace('page://', '/') }
  }

  linkToExternal(href) {
    return {...this.attrs, href: href, target: '_blank', rel: 'noopener' }
  }

  linkToModal(href) {
    return {...this.attrs, to: href.replace('modal://', '/') }
  }

  linkToExplicit(href) {
    return {...this.attrs, to: href }
  }

  render() {
    const attrs = this.buildAttrs()

    if (attrs.href) {
      return ( <a {...attrs}>{this.props.children}</a> )
    } else {
      return ( <GatsbyLink {...attrs}>{this.props.children}</GatsbyLink> )
    }
  }
}

export default Link;

import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link'

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: {}
    };
  }

  isHashTag(url) {
    return !url.match('http') && url.match(/#/);
  }

  isCurrentSite(url) {
    return url.match(process.env.HOSTNAME) || !url.match('http');
  }

  isExternalSite(url) {
    return !this.isCurrentSite(url);
  }

  startLoader() {
    //
  }

  render() {
    let classes = classNames(this.props.className);

    if (this.isExternalSite(this.props.to)) {
      return (
        <a target="_blank" rel="noopener" {...this.props}>{this.props.children}</a>
      );
    } else if (this.isHashTag(this.props.to)) {
      return (
        <a {...this.props}>{this.props.children}</a>
      );
    } else {
      return (
        <Link to={this.props.to}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          className={this.props.className || null}
          onClick={(e) => {
            this.startLoader();
            this.props.onClick(e);
          }}
          style={this.props.style}>
          {this.props.children}
        </Link>
      );
    }
  }
}

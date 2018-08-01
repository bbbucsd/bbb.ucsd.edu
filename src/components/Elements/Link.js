import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link'
import Validator from 'utils/validator';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: {}
    };
  }

  startLoader() {
    //
  }

  linkTo() {
    if (typeof this.props.to === 'string') {
      return this.props.to;
    } else {
      return "#";
    }
  }

  buildLink() {
    const _this = this;
    return (
      <Link to={this.linkTo()}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        className={this.props.className || null}
        onClick={(e) => {
          _this.startLoader();
          _this.props.onClick && _this.props.onClick(e);
        }}
        style={this.props.style}>
        {this.props.children}
      </Link>
    );
  }

  nonInternalProps() {
    let nonInternalProps = Object.assign({}, this.props);
    nonInternalProps.href = nonInternalProps.to;
    delete nonInternalProps.to;
    return nonInternalProps;
  }

  render() {
    let classes = classNames(this.props.className);

    if (typeof this.props.to === 'string') {
      if (Validator.isExternalSite(this.props.to)) {
        return (
          <a target="_blank" rel="noopener" {...this.nonInternalProps()}>{this.props.children}</a>
        );
      } else if (Validator.isHashTag(this.props.to)) {
        return (
          <a {...this.nonInternalProps()}>{this.props.children}</a>
        );
      } else {
        return this.buildLink();
      }
    } else {
      return this.buildLink();
    }
  }
}

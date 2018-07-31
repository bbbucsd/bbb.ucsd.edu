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

  nonInternalProps() {
    let nonInternalProps = Object.assign({}, this.props);
    nonInternalProps.href = nonInternalProps.to;
    delete nonInternalProps.to;
    return nonInternalProps;
  }

  render() {
    let classes = classNames(this.props.className);

    if (Validator.isExternalSite(this.props.to)) {
      return (
        <a target="_blank" rel="noopener" {...this.nonInternalProps()}>{this.props.children}</a>
      );
    } else if (Validator.isHashTag(this.props.to)) {
      return (
        <a {...this.nonInternalProps()}>{this.props.children}</a>
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

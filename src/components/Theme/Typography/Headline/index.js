import React, { Component } from 'react';
import style from './style.module.scss';
import _ from 'lodash';

class ThemeHeadline extends Component {
  textCopy() {
    this.text = _.at(this.props.text, ['text', '[0]text'])
    this.text = _.compact(this.text)
    return _.first(this.text) || this.props.children
  }

  render() {
    const { color, className, h1, h2, h3 } = this.props;

    return (
      <div className={`${style.typography} ${className}`}>
        {React.createElement((h1 && "h1") || (h2 && "h2") || (h3 && "h3"), {
          style: { color: color }
        }, this.textCopy())}
      </div>
    );
  }
}


export default ThemeHeadline;

import React, { Component } from 'react';
import style from './style.module.scss';

class ThemeHeadline extends Component {
  textCopy() {
    try {
      this.text = this.props.text.text
    } catch(error) {
      this.text = this.props.text
    }

    return this.text || this.props.children
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

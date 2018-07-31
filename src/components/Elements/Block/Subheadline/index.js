import React, { Component } from 'react';
import ThemeHeadline from 'components/Theme/Typography/Headline'


// Style
import style from './style.module.scss';

class Subheadline extends Component {
  render() {
    const { children, color, text, className } = this.props;

    return (
      <div>
        <ThemeHeadline h3 color={color} className={`${style.root} ${className}`} text={text}>{ children }</ThemeHeadline>
      </div>
    )
  }
}

export default Subheadline;

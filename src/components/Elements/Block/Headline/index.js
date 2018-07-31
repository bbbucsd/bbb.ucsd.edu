import React, { Component } from 'react';
import ThemeHeadline from 'components/Theme/Typography/Headline'


// Style
import style from './style.module.scss';

class Headline extends Component {
  render() {
    const { children, color, className, text } = this.props;

    return (
      <div>
        <ThemeHeadline h2 color={color} className={`${style.root} ${className}`} text={text}>{ children }</ThemeHeadline>
      </div>
    )
  }
}

export default Headline;

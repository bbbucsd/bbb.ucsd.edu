import React, { Component } from 'react';

// Style
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);


class HeroTypography extends Component {
  render() {
    const { children, color, h1, h2, h3 } = this.props;

    return (
      <div>
        <div style={color ? { color: color } : {}}
             className={cx({h1: h1, h2: h2, h3: h3})}>
          { children }
        </div>
      </div>
    );
  }
}


export default HeroTypography;

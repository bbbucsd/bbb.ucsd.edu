import React, { Component } from 'react';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class HeroWrapper extends Component {
  render() {
    const { children, reducedHeight, imageSrc } = this.props;

    return (
      <div style={{ backgroundImage: 'url("' + imageSrc + '")' }}
           className={cx({ root: true, reducedHeight: reducedHeight }) }>
        {children}
      </div>
    );
  }
}


export default HeroWrapper;

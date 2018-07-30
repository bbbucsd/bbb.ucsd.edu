import React, { Component } from 'react';

// Style
import style from './style.module.scss';

class HeroTypography extends Component {
  render() {
    const { children, color, h1, h2, h3 } = this.props;

    return (
      <div className={style.heroTypography}>
        {React.createElement((h1 && "h1") || (h2 && "h2") || (h3 && "h3"), {
          style: { color: color }
        }, children)}
      </div>
    );
  }
}


export default HeroTypography;

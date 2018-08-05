import React, { Component } from 'react';
import ThemeButton from 'components/Theme/Button';
import style from './style.module.scss';

class Cta extends Component {
  render() {
    const { to, children, className, arrow, small, onClick  } = this.props;

    return (children ? (
      <div className={`${style.root} ${className}`}>
        <ThemeButton to={ to || '#' } arrow={arrow === undefined ? true : arrow} onClick={onClick} small={small}>{ children }</ThemeButton>
      </div>
    ) : null);
  }
}

export default Cta;

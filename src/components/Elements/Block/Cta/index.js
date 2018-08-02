import React, { Component } from 'react';
import ThemeButton from 'components/Theme/Button'
import style from './style.module.scss';

class Cta extends Component {
  render() {
    const { to, children, className, small  } = this.props

    return(
      <div>
        {children &&
        <div className={`${style.root} ${className}`}>
          <ThemeButton to={ to } small={small}>{ children }</ThemeButton>
        </div>
        }
      </div>
    )
  }
}


export default Cta;

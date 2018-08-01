import React, { Component } from 'react';
import style from './style.module.scss'
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft'

class SimpleBackButton extends Component {

  back() {
    window.history.back()
  }

  render() {
    return (
      <div>
        <a onClick={ this.back } className={style.back}><ArrowLeft className={style.arrow} /> Back</a>
      </div>
    );
  }
}



export default SimpleBackButton;

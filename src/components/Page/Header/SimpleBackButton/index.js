import React, { Component } from 'react';
import style from './style.module.scss'
import Ionicon from 'react-ionicons'

class SimpleBackButton extends Component {

  back() {
    window.history.back()
  }

  render() {
    return (
      <div>
        <a onClick={ this.back } className={style.back}><Ionicon icon="arrow-left" className={style.arrow} /> Back</a>
      </div>
    );
  }
}



export default SimpleBackButton;

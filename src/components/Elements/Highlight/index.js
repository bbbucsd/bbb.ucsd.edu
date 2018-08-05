import React, { Component } from 'react';
import style from './style.module.scss'
import classNames from 'classnames/bind'
let cx = classNames.bind(style);


class Highlight extends Component {
  render() {
    const { largeText, smallText } = this.props;

    return (
      <div className={style.root}>
        <h1 className={style.largeText} style={{color: this.props.color}}>{largeText}</h1>
        <div className={style.smallText} style={{color: this.props.color}}>{smallText}</div>
      </div>
    );
  }
}


export default Highlight;

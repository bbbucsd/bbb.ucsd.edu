import React, { Component } from "react";
import style from './style.module.scss';

export default class HighlightContent extends Component {

  render() {
    return (
      <div className={style.root}>
        <div className={style.BorderTopLeft} />
        <div className={style.BorderTopRight} />
        <div className={style.BorderBottomLeft} />
        <div className={style.BorderBottomRight} />
        <div className={style.content}>
          <h4 className={style.headline}>{this.props.headline}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }

}

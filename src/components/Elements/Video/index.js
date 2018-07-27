import React, { Component } from 'react';
import style from './style.module.scss'


class Video extends Component {
  render() {
    const { src } = this.props;

    return (
      <video loop autoPlay playsInline className={style.root}>
        <source src={src} type="video/mp4"/>
      </video>
    );
  }
}

export default Video;

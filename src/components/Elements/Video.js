import React, { Component } from 'react';
import classNames from 'classnames';

import './Video.scss';


class Video extends Component {

  render() {
    const { embed, src } = this.props;

    return (
      <video loop autoPlay playsInline className="video-background">
        <source src={src} type="video/mp4"/>
      </video>
    );
  }
}

export default Video;

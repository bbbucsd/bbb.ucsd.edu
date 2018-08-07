import React, { Component } from 'react';
import Styles, { styled, css} from './Styles';

const BackgroundVideo = styled.video`
  left: 0;
  right: 0;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -99;
  display: block;
`;

class Video extends Component {
  render() {
    const { src } = this.props;

    return (
      <BackgroundVideo loop autoPlay playsInline muted>
        <source src={src} type="video/mp4"/>
      </BackgroundVideo>
    );
  }
}

export default Video;

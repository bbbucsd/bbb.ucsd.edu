import React, { Component } from 'react';
import Styles, { styled, css} from './Styles';
import Validator from 'utils/validator';

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
  isVideo(src) {
    return src && Validator.isVideo(src)
  }

  render() {
    const { src } = this.props;

    return (
      <React.Fragment>
      { this.isVideo(src) &&
        <BackgroundVideo loop autoPlay playsInline muted>
          <source src={src} type="video/mp4"/>
        </BackgroundVideo> }
      </React.Fragment>
    );
  }
}

export default Video;

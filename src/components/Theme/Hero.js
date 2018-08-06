import React, { Component } from 'react';
import Validator from 'utils/validator';
import Video from './Video'
import Styles, { styled, css} from './Styles';

const Wrapper = styled.div`
  background-color: ${props => props.theme.black};
  text-align: center;
  color: ${props => props.theme.white};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  min-height: ${props => props.reducedHeight ? 50 : 80 }vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  align-items: ${props => props.alignment && !!props.alignment.match(/Center/i) ? 'center' : null };
  align-items: ${props => props.alignment && !!props.alignment.match(/Left/i) ? 'flex-start' : null };
  align-items: ${props => props.alignment && !!props.alignment.match(/Right/i) ? 'flex-end' : null };
  text-indent: ${props => props.alignment && !!props.alignment.match(/Left/i) ? '150px' : null };
  
  ${props => props.backgroundColor && Styles.backgroundColor(props.backgroundColor)}
  ${props => props.src && Styles.backgroundImage(props.src)}
`

class Hero extends Component {
  isVideo() {
    return this.props.src && Validator.isVideo(this.props.src)
  }
  render() {
    const { children, src } = this.props;

    return (
      <Wrapper {...this.props}>
        { this.isVideo && <Video src={src} /> }
        {children}
      </Wrapper>
    );
  }
}


export default Hero;

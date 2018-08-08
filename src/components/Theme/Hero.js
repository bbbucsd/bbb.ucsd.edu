import React, { Component } from 'react';
import Validator from 'utils/validator';
import Video from './Video'
import Styles, { styled, css, media } from 'components/Theme/Styles';

const minHeightMixin = css`
  ${ props => {
  switch (props.height) {
    case 'XL':
      return '100vh'
    case 'Large':
      return '70vh'
    case 'Medium':
      return '50vh'
    case 'Small':
      return '30vh'
    default:
      return '80vh'
  }}}
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: ${p => p.color || p.theme.black};
  background-image: url('${p => p.src && Validator.isImage(p.src) ? p.src : null}');
  
  ${media.greaterThan('medium')`
    min-height: ${minHeightMixin};
    text-align: ${p => p.align ? p.align.toLowerCase() : 'center'};
    text-indent: ${p => p.align && !!p.align.match(/Left/i) ? '150px' : null };
   `}
  
  
  ${media.lessThan('medium')`
    min-height: ${minHeightMixin};
    padding-top:30px;
    text-indent: none;
    text-align: center;
  `}
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

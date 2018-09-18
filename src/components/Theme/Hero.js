import React, { Component } from 'react';
import Validator from 'utils/validator';
import Video from './Video'
import { styled, css, media } from 'components/Theme/Styles';

const minHeightMixin = css`
  ${ props => {
  switch (props.height) {
    case 'XL':
      return '100vh';
    case 'Large':
      return '95vh';
    case 'Medium':
      return '50vh';
    case 'Small':
      return '30vh';
    default:
      return '50vh';
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
  background-position: top center;
  background: ${p => p.color || "linear-gradient(to right, " + p.theme.brandInfo + ", " +  p.theme.brandPrimary + ")"};
  ${p => p.src && Validator.isImage(p.src) ?
    'background-image: url(' + p.src + ');'
  : null}

  ${media.greaterThan('medium')`
    min-height: ${minHeightMixin};
    text-align: ${p => p.align ? p.align.toLowerCase() : 'center'};
    text-indent: ${p => p.align && !!p.align.match(/Left/i) ? '150px' : null };

   `}
  ${media.lessThan('medium')`
    min-height: ${minHeightMixin};
    padding-top:30px;
    text-indent: initial;
    text-align: center;
  `}
  background-size: cover;
`

class Hero extends Component {
  isVideo() {
    return this.props.src && Validator.isVideo(this.props.src)
  }
  render() {
    const {
      children,
      src,
      align,
    } = this.props;

    if (!align) {
      return (
        <Wrapper {...this.props}>
          { this.isVideo && <Video src={src} /> }
          {children}
        </Wrapper>
      );
    } else {
      if (align.match(/left/i)) {
        return (
          <Wrapper {...this.props}>
            { this.isVideo && <Video src={src} /> }
            {children}
          </Wrapper>
        );
      } else if (align.match(/right/i)) {
        return (
          <Wrapper {...this.props}>
            { this.isVideo && <Video src={src} /> }
            {children}
          </Wrapper>
        );
      } else {
        return (
          <Wrapper {...this.props}>
            { this.isVideo && <Video src={src} /> }
            {children}
          </Wrapper>
        );
      }
    }
  }
}


export default Hero;

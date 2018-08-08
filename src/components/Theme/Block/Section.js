import React, { Component } from 'react';
import Validator from 'utils/validator';
import Video from '../Video'
import Styles, { styled, css, media } from '../Styles';

const justify = (keyword) => {
  switch (keyword) {
    case 'middle':
      return 'center'
    case 'topish':
      return 'flex-start;'
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end;'
    case 'bottomish':
      return 'flex-end;'
  }
}

const justifyIsh = (keyword) => {
  switch (keyword) {
    case 'topish':
      return 'padding-top:15vh;'
    case 'bottomish':
      return 'padding-bottom: 15vh;'
  }
}

const SectionWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  align-content: center;
  justify-content: ${p => p.justify ? justify(p.justify.toLowerCase()) : 'center' };
  align-items: center;
  text-align: ${p => p.align ? p.align.toLowerCase() : 'center'};;
  overflow: hidden;
  position:relative;
  padding: 0 ${props => props.full ? 50 : props.theme.largePadding * 3.5}px;

  // boilerplate stuff to make it easy to set background images on sections
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  ${media.between("medium", "large")`
    padding:0 50px !important;
  `}

  ${media.lessThan("medium")`
    padding:0 50px !important ;
  `}

  > * {
    width:100%;
  }

  // justify-ish
  ${p => p.justify ? justifyIsh(p.justify.toLowerCase()) : null };
`;

class Section extends Component {
  render() {
    const { children } = this.props

    return (
      <SectionWrapper {...this.props}>
        { children }
      </SectionWrapper>
    )
  }
}

export default Section;

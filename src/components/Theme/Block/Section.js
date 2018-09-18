import React, { Component } from 'react';
import { styled } from '../Styles';
import _ from 'lodash';

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
    default:
      return null;
  }
}

const align = (keyword) => {
  switch (keyword) {
    case 'center':
      return 'center'
    case 'left':
      return 'flex-start'
    case 'right':
      return 'flex-end;'
    default:
      return null;
  }
}

const justifyIsh = (keyword) => {
  switch (keyword) {
    case 'topish':
      return 'padding-top:15vh;'
    case 'bottomish':
      return 'padding-bottom: 15vh;'
    default:
      return null;
  }
}



const SectionWrapper = styled.div`
  width:100%;
  flex: 1;
  display:flex;
  flex-direction: column;
  align-content: center;
  overflow: hidden;
  position:relative;

  // boilerplate stuff to make it easy to set background images on sections
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;


  // justify="Top|Middle|Bottom"
  justify-content: ${p => p.justify ? justify(p.justify.toLowerCase()) : 'center' };
  // align="Left|Right|Center"
  align-items: ${p => p.align ? align(p.align.toLowerCase())  : 'center'};

  // justify="Topish|Bottomish"
  ${p => p.justify ? justifyIsh(p.justify.toLowerCase()) : null };
`;

const SectionInner = styled.div`
  display:flex;
  flex-direction: column;
  flex: 0 0 100%;
  width: 100%;
  align-items: ${p => p.align ? align(p.align.toLowerCase())  : 'center'};
  text-align: ${p => (p.align && p.align.toLowerCase() === 'center') ? 'center' : 'left'};
  align-content: center;
  justify-content: center;
`;

class Section extends Component {
  render() {
    const { children } = this.props
    const attrs = _.omit(this.props, 'src')

    return (
      <SectionWrapper {...attrs}>
        <SectionInner align={this.props.align}>
          { children }
        </SectionInner>
      </SectionWrapper>
    )
  }
}

export default Section;

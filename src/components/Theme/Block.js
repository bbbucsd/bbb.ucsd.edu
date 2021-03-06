import React, { Component } from 'react';
import { styled, css, media } from 'components/Theme/Styles';

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
      return 'auto';
  }}}
`;

const autoMarginMixin = css`
  ${p => {
    if (p.height === 'Auto') {
      switch (p.justify) {
        case 'Top':
          return '10vh 0 25vh 0'
        case 'Bottom':
          return '25vh 0 10vh 0'
        default:
          return null;
      }
    }
  }}
`;

const padding = (selectorLeft, selectorRight, blockPadding) => {
  return css`
    & > ${selectorLeft} {
      padding-left: ${blockPadding}px;
    }

    & > ${selectorRight} {
      padding-right: ${blockPadding}px;
    }
  `;
}

const BlockWrapper = styled.div`
  display: flex;
  flex-flow: row;
  height: 100%;
  justify-content: space-around;
  align-items: stretch;
  box-sizing:border-box;
  background-color: ${ props => props.color };
  min-height: ${minHeightMixin};
  margin: ${autoMarginMixin};
  flex-flow:${p => (p.direction && p.direction.match(/left/i)) ? 'row-reverse' : null};


  // finishing
  ${p => (p.finishing && p.finishing === 'Frame') ? 'border:25px solid #FFFFFF' : null};


  // paddings
  ${media.greaterThan("large")`
    ${p => padding(':first-child', ':last-child', p.theme.blockPaddingLarge)}
  `}

  ${media.greaterThan("medium")`
    ${p => padding(':first-child', ':last-child', p.theme.blockPaddingMedium)}
  `}

  ${media.lessThan("medium")`
    flex-flow:column;
    ${p => padding('div', 'div', p.theme.blockPaddingSmall)}
  `}
`;


class Block extends Component {
  getJustifyFromChild() {
    return this.props.children && this.props.children.props && this.props.children.props.justify ?
      this.props.children.props.justify : null
  }

  render() {
    return (
      <BlockWrapper justify={this.getJustifyFromChild()} {...this.props}>
        { this.props.children }
      </BlockWrapper>
    )
  }
}

export Section from './Block/Section'

export default Block;

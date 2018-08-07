import React, { Component } from 'react';
import { styled, css, media } from 'components/Theme/Styles';

const minHeightMixin = css`
  ${ props => {
  switch (props.height) {
    case 'XL':
      return '900px'
    case 'Large':
      return '600px'
    case 'Medium':
      return '400px'
    case 'Small':
      return '200px'
    default:
      return 'auto'
  }}}
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-flow: row;
  height: 100%;
  align-items: stretch;
  
  background-color: ${ props => props.color };
  
  ${media.lessThan("medium")`
    min-height: ${props => props.height && (minHeightMixin / 1.5)};
  `}
  
  ${media.greaterThan("medium")`
    min-height: ${props => props.height && (minHeightMixin)};
  `}  
`;


class Block extends Component {
  orderChildren() {
    this.blocks = React.Children.toArray(this.props.children);

    if (this.props.direction && !!this.props.direction.match(/left/i)) {
      this.blocks.reverse();
    }

    return this.blocks;
  }

  render() {
    return (
      <BlockWrapper {...this.props}>
        { this.orderChildren() }
      </BlockWrapper>
    )
  }
}

export Section from './Block/Section'

export default Block;

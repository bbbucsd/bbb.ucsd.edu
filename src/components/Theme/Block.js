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
      return 'auto'
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
      } 
    }
  }}
`

const BlockWrapper = styled.div`
  display: flex;
  flex-flow: row;
  height: 100%;
  align-items: stretch;
  
  background-color: ${ props => props.color };
  min-height: ${minHeightMixin};
  margin: ${autoMarginMixin};
`;


class Block extends Component {
  getJustifyFromChild() {
    return this.props.children && this.props.children.props && this.props.children.props.justify ?
      this.props.children.props.justify : null
  }

  orderChildren() {
    this.blocks = React.Children.toArray(this.props.children);

    if (this.props.direction && !!this.props.direction.match(/left/i)) {
      this.blocks.reverse();
    }

    return this.blocks;
  }

  render() {
    return (
      <BlockWrapper justify={this.getJustifyFromChild()} {...this.props}>
        { this.orderChildren() }
      </BlockWrapper>
    )
  }
}

export Section from './Block/Section'

export default Block;

import React, { Component } from 'react';
import styled, { css } from 'styled-components';


const minHeightMixin = css`
  min-height: ${ props => {
  switch (props.height) {
    case 'Large':
      return '600px;'
    case 'Medium':
      return '400px;'
    case 'Small':
      return '200px;'
    default:
      return '600px'
  }}}
`;

const paddingTopMixin = css`
  padding-top: ${ props => { switch (props.paddingTop) {
    case 'Large':
      return '60px;'
    case 'Medium':
      return '20px;'
    case 'Small':
      return '10px;'
    case 'None':
      return '0'
  }}}
`;

const paddingBottomMixin = css`
  padding-bottom: ${ props => { switch (props.paddingBottom) {
  case 'Large':
    return '60px;'
  case 'Medium':
    return '20px;'
  case 'Small':
    return '10px;'
  case 'None':
    return '0'
}}}
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  align-items: stretch;
  background-color: ${ props => props.color };
  ${props => props.height && minHeightMixin}
`;


const BlockInnerWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: space-around;
  ${props => props.paddingTop && paddingTopMixin}
  ${props => props.paddingBottom && paddingBottomMixin}
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
        <BlockInnerWrapper {...this.props}>
          { this.orderChildren() }
        </BlockInnerWrapper>
      </BlockWrapper>
    )
  }
}

export Headline from './Headline'
export Subheadline from './Subheadline'
export Section from './Section'
export Cta from './Cta'
export HorizontalForm from './HorizontalForm'
export RichText from './RichText'

export default Block;

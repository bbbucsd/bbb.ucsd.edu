import React, { Component } from 'react';
import Link from '../Link';
import Styles, { styled, css} from '../Styles';

const Item = styled.li`
  padding: 1px 0;
  font-size: 14px;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  
  a {
    color: ${props => props.theme.black};
    line-height: 25px;
    font-size:${p => p.theme.h2FontSize / 1.3}px;
  }
`;

class HamburgerNavItem extends Component {
  render() {
    return (
      <Item>
        { this.props.to ? <Link to={this.props.to || ''}>{this.props.children}</Link> : this.props.children }
      </Item>
    );
  }
}

export default HamburgerNavItem;

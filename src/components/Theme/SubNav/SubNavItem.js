import React, { Component } from 'react';
import Link from '../Link';
import Styles, { styled, css} from '../Styles';

const Item = styled.li`
  padding: 1px 0;
  cursor: pointer;
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
  }
`;

class SubNavItem extends Component {
  render() {
    return (
      <Item>
        { this.props.to ? <Link to={this.props.to || ''}>{this.props.children}</Link> : this.props.children }
      </Item>
    );
  }
}

export default SubNavItem;

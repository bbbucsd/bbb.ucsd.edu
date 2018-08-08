import React, { Component } from 'react';
import Link from './Link';
import Styles, { styled, css } from './Styles';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight.cjs'

var menuWidth = 900;
var offsetY = 200;
var offsetX = 96; //isn't this offsetY (vertical)?
var arrowSize = 8;
var padding = 15;

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  white-space: nowrap;
`;

const MainLink = styled(Link)`
  font-size: ${p => p.theme.h2FontSize}px;
  color:${p => p.theme.black};
  border-bottom:1px solid #cacaca;
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  &:visited {
    color:${p => p.theme.black};
  }
`;

const Arrow = styled(KeyboardArrowRight)`
  width:30px;
  height:30px;
  position:relative;
  top:2px;
  transition: all 0.25s;
  transform: ${p => p.open ? 'rotate(90deg)' : 'rotate(0)'};
`;

const Menu = styled.div`
  opacity: 0;
  max-height:0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.25s;
  will-change: transform;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  color:#000;
  ${p => p.open ? `
    opacity: 1;
    max-height:500px;
    visibility: visible;
  ` : null}
`;

const MenuItemsWrapper = styled.ul`
  position: absolute;
  background-color: #f6f6f6;
  box-shadow: 0px 40px 100px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  width: 100%;
  color: #000;
  padding: ${p => p.padding || 50}px;
`;

const MenuItems = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

class HamburgerNav extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    const { text, to, children } = this.props;

    return (
      <Wrapper>
        <MainLink to={to} onClick={ this.toggle } open={this.state.open}>{text} <Arrow open={this.state.open} /></MainLink>

        <Menu open={this.state.open}>
          { children }
        </Menu>
      </Wrapper>
    );
  }
}

export HamburgerNavGroup from './HamburgerNav/HamburgerNavGroup';
export HamburgerNavItem from './HamburgerNav/HamburgerNavItem';
export default HamburgerNav;


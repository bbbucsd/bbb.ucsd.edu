import React, { Component } from 'react';
import { styled } from './Styles';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight.cjs'

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  white-space: nowrap;
`;

const MainLink = styled.span`
  font-size: 35px;
  color:${p => p.theme.white};
  border-bottom:1px solid #cacaca;
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  &:visited {
    color:${p => p.theme.white};
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
  transition: all 0.5s;
  will-change: transform;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  color: ${p => p.theme.white};
  ${p => p.open ? `
    opacity: 1;
    max-height:500px;
    visibility: visible;
  ` : null}
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


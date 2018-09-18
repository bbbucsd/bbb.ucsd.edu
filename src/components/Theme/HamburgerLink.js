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
  color:${p => p.theme.white};
  border-bottom:1px solid #cacaca;
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  &:visited {
    color:${p => p.theme.white};
  }
`;

class HamburgerLink extends Component {
  render() {
    const { to, children, onClick } = this.props;

    return (
      <Wrapper>
        <MainLink onClick={onClick} to={to}>{children}</MainLink>
      </Wrapper>
    );
  }
}

export default HamburgerLink;


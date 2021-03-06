import React, { Component } from 'react';
import Link from './Link';
import { styled } from './Styles';

var menuWidth = 900;
var offsetY = 200;
var offsetX = 96; //isn't this offsetY (vertical)?
var arrowSize = 14;
var padding = 15;

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  white-space: nowrap;
`;

const MainLink = styled(Link)`
  font-weight: 400;
  cursor: pointer;
  color:${props => props.floating ? props.theme.white : (props.color || props.theme.white)};
  &:visited {
    color:${props => props.floating ? props.theme.white : (props.color || props.theme.white)};
  }
`;

const Menu = styled.div`
  position:absolute;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  will-change: transform;
  top: ${props => props.offsetX || offsetX}px;
  left: -${props => (props.offsetY || offsetY) + 7}px;
  width: ${props => props.menuWidth || menuWidth}px;
  ${props => props.open ? `
    transition: opacity 0.2s linear, transform 0.2s linear, visibility 0.8s linear;
    transform: translateY(-34px);
    opacity: 1;
    visibility: visible;
  ` : null}
`;


const Arrow = styled.div`
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  top: -${props => props.arrowSize || arrowSize}px;
  left: ${props => ((props.offsetY || offsetY)) + (props.arrowSize || arrowSize) + padding + ((props.arrowSize || arrowSize) / 2)}px;
  border-left: ${props => props.arrowSize || arrowSize}px solid transparent;
  border-right: ${props => props.arrowSize || arrowSize}px solid transparent;
  border-bottom: ${props => props.arrowSize || arrowSize}px solid ${p => p.theme.white};
`;

const MenuItemsWrapper = styled.ul`
  position: absolute;
  background-color: ${p => p.theme.white};
  box-shadow: 0px 40px 100px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 100%;
  color: #000;
  padding: 20px;
`;

const MenuItems = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

class SubNav extends Component {
  state = {
    open: false
  };

  open = () => {
    this.setState({open: true});
  };

  close = () => {
    this.setState({open: false});
  };

  render() {
    const { color, text, to, children, floating, menuWidth, arrowSize, offsetY, offsetX, padding } = this.props;

    return (
      <Wrapper onMouseLeave={this.close}>
        <MainLink to={to} onMouseEnter={ this.open } color={color} floating={floating} open={this.state.open}>{text}</MainLink>

        <Menu open={this.state.open} menuWidth={menuWidth} offsetY={offsetY} offsetX={offsetX}>
          <Arrow arrowSize={arrowSize} offsetY={offsetY} offsetX={offsetX} padding={padding} />
          <MenuItemsWrapper padding={padding}>
            <MenuItems>
              { children }
            </MenuItems>
          </MenuItemsWrapper>
        </Menu>
      </Wrapper>
    );
  }
}

export SubNavGroup from './SubNav/SubNavGroup';
export SubNavItem from './SubNav/SubNavItem';
export default SubNav;


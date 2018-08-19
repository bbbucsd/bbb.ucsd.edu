import React, { Component } from 'react';
import Link from './Link';
import Styles, { styled, css, media, keyframes } from './Styles';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight.cjs'

const ButtonLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`

const ThemeButton = styled.button`
  text-align: center;
  color: white;
  drop-shadow: 10px 10px 10px red;
  border-radius: 30px;
  background-color: ${p => p.theme.brandSuccess};
  text-transform: none;
  min-height: auto;
  min-width: auto;
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.small ? 12 : 14}px;
  padding: ${p => p.small ? '6px 10px' : `${p.theme.padding / 2}px ${p.theme.padding}px`};
  display: inline-flex;
  align-items: center;
  cursor:pointer;
  &:hover {
    background-color: ${p => p.theme.darkSuccess};
  }
  &:focus {
    outline:0;
  }
`;

const Bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(7px);
  }
  60% {
    transform: translateX(9px);
  }
`;

const Arrow = styled(KeyboardArrowRight)`
  position: relative;
  right: -4px;
  margin:0;
  font-size: 24px;
  fill: ${p => p.theme.white};
  top: 1px;
  height: ${p => p.small ? 20 : 28 }px;
  animation: ${p => p.animate ? Bounce : null } 2s infinite;
`;

// ThemeButton
class Button extends Component {

  state = {
    animateArrow: false
  };

  toggleArrow = () => {
    this.setState({animateArrow: !this.state.animateArrow});
  }

  render() {
    const {children, small, className } = this.props;

    return (
      <ButtonLink to={ this.props.to } onMouseOver={this.toggleArrow} onMouseOut={this.toggleArrow} {...this.props}>
        <ThemeButton small={small} aria-label={children} className={className}>
          {children}
          {this.props.arrow === false ? null : (
            <Arrow animate={this.state.animateArrow} small={small} />
          )}
        </ThemeButton>
      </ButtonLink>
    )
  }
}


export default Button;





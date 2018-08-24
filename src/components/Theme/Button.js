import React, { Component } from 'react';
import Link from './Link';
import { styled, keyframes } from './Styles';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight.cjs';
import _ from 'lodash';

const ThemeButton = styled.button`
  text-align: center;
  justify-content: center;
  color: white;
  drop-shadow: 10px 10px 10px red;
  background-color: ${p => p.theme.brandSuccess};
  text-transform: none;
  min-height: auto;
  min-width: ${p => p.fullWidth ? '100%' : 'auto'};
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => (p.small && 12) || (p.large && 18) || 14}px;
  padding: ${p => (p.large && p.arrow && '12px 90px 12px 110px') || (p.small && '6px 10px') || (p.large && '12px 100px') || `${p.theme.padding / 2}px ${p.theme.padding}px`};
  display: inline-flex;
  align-items: center;
  cursor:pointer;
  opacity: ${p => p.disabled ? '0.5' : '1'};
  text-transform: ${p => p.large ? 'uppercase' :  'initial'};
  &:hover {
    background-color: ${p => !p.disabled && p.theme.darkSuccess};
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
  height: ${p => (p.small && 20) || (p.large && 38) || 28 }px;
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
    const { arrow, children, large, small, fullWidth, disabled, className } = this.props;

    return (
      <Link style={{
        textDecoration: 'none',
        display: 'inline-block',
        width: fullWidth ? '100%' : 'auto'
      }} to={ this.props.to } onMouseOver={this.toggleArrow} onMouseOut={this.toggleArrow}>
        <ThemeButton arrow={arrow} large={large} small={small} fullWidth={fullWidth} aria-label={children} className={className} disabled={_.isBoolean(disabled) ? disabled : false} >
          {children}
          {arrow === false ? null : (
            <Arrow animate={this.state.animateArrow} small={small} large={large} />
          )}
        </ThemeButton>
      </Link>
    )
  }
}

export default Button;

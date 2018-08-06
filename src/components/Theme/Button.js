import React, { Component } from 'react';
import Link from './Link';
import styled from 'styled-components';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight.cjs'

const ButtonLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`

const ThemeButton = styled.button`
  border-radius: 2px;
  text-align: center;
  color: white;
  background-color: ${props => props.theme.brandInfo};
  text-transform: none;
  min-height: auto;
  min-width: auto;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.small ? 12 : 14}px;
  padding: ${props => props.small ? '6px 10px' : `${props.theme.padding / 2}px ${props.theme.padding}px`}; 
  display: inline-flex;
  align-items: center;
  cursor:pointer;
  &:hover {
    background-color: ${props => props.theme.brandInfo};
  }
  &:focus {
    outline:0;
  }
`;

const Arrow = styled(KeyboardArrowRight)`
  position: relative;
  right: -4px;
  margin:0;
  font-size: 24px;
  fill: ${props => props.theme.white};
  top: ${props => props.small ? 0 : 1 }px;
  height: ${props => props.small ? 20 : 28 }px;
  ${props => props.animate ? 'animation: bounce 2s infinite;' : null }
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
    const {children, small, className, onClick} = this.props;

    return (
      <ButtonLink to={ this.props.to } onClick={onClick} onMouseOver={this.toggleArrow} onMouseOut={this.toggleArrow} className={className}>
        <ThemeButton small={small} aria-label={children}>
          {children}
          {this.props.arrow === false ? null : (
            <Arrow animate={this.state.animateArrow} />
          )}
        </ThemeButton>
      </ButtonLink>
    )
  }
}


export default Button;





import React, { Component } from 'react';
import HamburgerNav, { HamburgerNavGroup, HamburgerNavItem } from 'components/Theme/HamburgerNav';

export default class extends Component {

  render() {
    const { onClick } = this.props;
    return (
      <HamburgerNav text="Work With Me">
        <HamburgerNavGroup>
          <HamburgerNavItem onClick={onClick} to="/coaching">Coaching</HamburgerNavItem>
          <HamburgerNavItem onClick={onClick} to="/contact">Contact</HamburgerNavItem>
        </HamburgerNavGroup>
      </HamburgerNav>
    );
  }
}

import React, { Component } from 'react';
import HamburgerNav, { HamburgerNavGroup, HamburgerNavItem } from 'components/Theme/HamburgerNav';

export default class extends Component {

  render() {
    return (
      <HamburgerNav text="Work With Me">
        <HamburgerNavGroup>
          <HamburgerNavItem to="/coaching">Coaching</HamburgerNavItem>
          <HamburgerNavItem to="/contact">Contact</HamburgerNavItem>
        </HamburgerNavGroup>
      </HamburgerNav>
    );
  }
}

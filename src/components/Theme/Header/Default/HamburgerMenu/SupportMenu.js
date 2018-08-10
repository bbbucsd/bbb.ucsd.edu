import React, { Component } from 'react';
import HamburgerNav, { HamburgerNavGroup, HamburgerNavItem } from 'components/Theme/HamburgerNav';

class SupportMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <HamburgerNav text="Support">
        <HamburgerNavGroup>
          <HamburgerNavItem to="tel:1-800-624-6717">Call: 1.800.624.6717</HamburgerNavItem>
          <HamburgerNavItem to="mailto:support@proluxe.com">Email: support@proluxe.com</HamburgerNavItem>
        </HamburgerNavGroup>
      </HamburgerNav>
    );
  }
}

export default SupportMenu;

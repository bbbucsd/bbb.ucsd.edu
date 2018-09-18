import React, { Component } from 'react';
import HamburgerNav, { HamburgerNavGroup, HamburgerNavItem } from 'components/Theme/HamburgerNav';

class LearnMenu extends Component {

  render() {
    const { onClick } = this.props;
    return (
      <HamburgerNav text="Learn">
        <HamburgerNavGroup>
          <HamburgerNavItem onClick={onClick} to="/resources">Resources</HamburgerNavItem>
          <HamburgerNavItem onClick={onClick} to="/learn/brand-identity">Brand & Identity</HamburgerNavItem>
          <HamburgerNavItem onClick={onClick} to="/learn/marketing-measurement">Marketing & Measurement</HamburgerNavItem>
          <HamburgerNavItem onClick={onClick} to="/learn/business-operations">Business & Operations</HamburgerNavItem>
        </HamburgerNavGroup>
      </HamburgerNav>
    );
  }
}

export default LearnMenu;

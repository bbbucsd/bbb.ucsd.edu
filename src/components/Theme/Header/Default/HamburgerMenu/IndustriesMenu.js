import React, { Component } from 'react';
import HamburgerNav, { HamburgerNavGroup, HamburgerNavItem } from 'components/Theme/HamburgerNav';

class IndustriesMenu extends Component {

  render() {
    return (
      <HamburgerNav text="Industries">
        <HamburgerNavGroup>
          <HamburgerNavItem to="/industries/restaurants">Restaurants</HamburgerNavItem>
          <HamburgerNavItem to="/industries/healthcare">Healthcare</HamburgerNavItem>
          <HamburgerNavItem to="/industries/hospitality">Hospitality</HamburgerNavItem>
          <HamburgerNavItem to="/industries/education">Education</HamburgerNavItem>
          <HamburgerNavItem to="/industries/business">Business</HamburgerNavItem>
          <HamburgerNavItem to="/industries/supermarkets">Groceries & Supermarkets</HamburgerNavItem>
          <HamburgerNavItem to="/industries/convenience-stores">Convenience Stores</HamburgerNavItem>
        </HamburgerNavGroup>
      </HamburgerNav>
    );
  }
}

export default IndustriesMenu;

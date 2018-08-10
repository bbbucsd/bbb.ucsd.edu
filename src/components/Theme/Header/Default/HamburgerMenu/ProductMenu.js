import React, { Component } from 'react';
import HamburgerNav, { HamburgerNavGroup, HamburgerNavItem } from 'components/Theme/HamburgerNav';

class ProductMenu extends Component {

  render() {
    return (
      <HamburgerNav text="Products">
        <HamburgerNavGroup title="Cooking">
          <HamburgerNavItem to="/products/smart-oven">Smart Ovens</HamburgerNavItem>
          <HamburgerNavItem to="/products/stone-hearth-ovens">Stone Hearth Ovens</HamburgerNavItem>
          <HamburgerNavItem to="/products/custom-ovens">Custom Ovens</HamburgerNavItem>
        </HamburgerNavGroup>

        <HamburgerNavGroup title="Grilling">
          <HamburgerNavItem to="/products/clamshell-grills">Clamshell Grills</HamburgerNavItem>
          <HamburgerNavItem to="/products/panini-grills">Panini Grills</HamburgerNavItem>
          <HamburgerNavItem to="/products/tortilla-grills">Tortilla Grills</HamburgerNavItem>
        </HamburgerNavGroup>

        <HamburgerNavGroup title="Food Prep">
          <HamburgerNavItem to="/products/pizza-presses">Pizza Presses</HamburgerNavItem>
          <HamburgerNavItem to="/products/tortilla-presses">Tortilla Presses</HamburgerNavItem>
          <HamburgerNavItem to="/products/bun-carmelizers">Bun Carmelizers</HamburgerNavItem>
        </HamburgerNavGroup>

        <HamburgerNavGroup title="Accessories">
          <HamburgerNavItem to="/products/storage">Storage</HamburgerNavItem>
          <HamburgerNavItem to="/products/pizza-dough">Pizza dough</HamburgerNavItem>
          <HamburgerNavItem to="/products/cookware-and-cleaners">Cookware/Cleaners</HamburgerNavItem>
        </HamburgerNavGroup>
      </HamburgerNav>
    );
  }
}

export default ProductMenu;

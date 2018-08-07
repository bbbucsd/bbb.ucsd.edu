import React, { Component } from 'react';
import SubNav, { SubNavGroup, SubNavItem } from 'components/Theme/SubNav';

class ProductMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <SubNav text="Products" floating={floating}>
        <SubNavGroup title="Cooking">
          <SubNavItem to="/products/smart-oven">Smart Ovens</SubNavItem>
          <SubNavItem to="/products/stone-hearth-ovens">Stone Hearth Ovens</SubNavItem>
          <SubNavItem to="/products/custom-ovens">Custom Ovens</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Grilling">
          <SubNavItem to="/products/clamshell-grills">Clamshell Grills</SubNavItem>
          <SubNavItem to="/products/panini-grills">Panini Grills</SubNavItem>
          <SubNavItem to="/products/tortilla-grills">Tortilla Grills</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Food Prep">
          <SubNavItem to="/products/pizza-presses">Pizza Presses</SubNavItem>
          <SubNavItem to="/products/tortilla-presses">Tortilla Presses</SubNavItem>
          <SubNavItem to="/products/bun-carmelizers">Bun Carmelizers</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Accessories">
          <SubNavItem to="/products/storage">Storage</SubNavItem>
          <SubNavItem to="/products/pizza-dough">Pizza dough</SubNavItem>
          <SubNavItem to="/products/cookware-and-cleaners">Cookware/Cleaners</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

export default ProductMenu;

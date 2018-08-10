import React, { Component } from 'react';
import SubNav, { SubNavGroup, SubNavItem } from 'components/Theme/SubNav';

class ProductMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <SubNav text="Products" floating={floating}>
        <SubNavGroup title="Cooking">
          <SubNavItem to="/smart-ovens">Smart Ovens</SubNavItem>
          <SubNavItem to="/stone-hearth-ovens">Stone Hearth Ovens</SubNavItem>
          <SubNavItem to="/custom-ovens">Custom Ovens</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Grilling">
          <SubNavItem to="/clamshell-grills">Clamshell Grills</SubNavItem>
          <SubNavItem to="/panini-grills">Panini Grills</SubNavItem>
          <SubNavItem to="/tortilla-grills">Tortilla Grills</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Food Prep">
          <SubNavItem to="/pizza-presses">Pizza Presses</SubNavItem>
          <SubNavItem to="/tortilla-presses">Tortilla Presses</SubNavItem>
          <SubNavItem to="/bun-carmelizers">Bun Carmelizers</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Accessories">
          <SubNavItem to="/storage">Storage</SubNavItem>
          <SubNavItem to="/pizza-dough">Pizza dough</SubNavItem>
          <SubNavItem to="/cookware-and-cleaners">Cookware/Cleaners</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

export default ProductMenu;

import React, { Component } from 'react';
import SubNav, { SubNavGroup, SubNavItem } from 'components/Elements/SubNav';

class IndustriesMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <SubNav text="Industries" floating={floating} menuWidth={280} offsetY={85} padding={40}>
        <SubNavGroup>
          <SubNavItem to="/industries/restaurants">Restaurants</SubNavItem>
          <SubNavItem to="/industries/healthcare">Healthcare</SubNavItem>
          <SubNavItem to="/industries/hospitality">Hospitality</SubNavItem>
          <SubNavItem to="/industries/education">Education</SubNavItem>
          <SubNavItem to="/industries/business">Business</SubNavItem>
          <SubNavItem to="/industries/supermarkets">Groceries & Supermarkets</SubNavItem>
          <SubNavItem to="/industries/convenience-stores">Convenience Stores</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

export default IndustriesMenu;

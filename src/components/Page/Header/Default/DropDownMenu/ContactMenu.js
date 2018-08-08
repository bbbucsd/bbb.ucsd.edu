import React, { Component } from 'react';
import SubNav, { SubNavGroup, SubNavItem } from 'components/Theme/SubNav';

class ContactMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <SubNav text="Contact Us" floating={floating} menuWidth={280} offsetY={85} padding={40}>
        <SubNavGroup>
          <SubNavItem>Restaurants</SubNavItem>
          <SubNavItem>Healthcare</SubNavItem>
          <SubNavItem>Hospitality</SubNavItem>
          <SubNavItem>Education</SubNavItem>
          <SubNavItem>Business</SubNavItem>
          <SubNavItem>Groceries & Supermarkets</SubNavItem>
          <SubNavItem>Convenience Stores</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

export default ContactMenu;

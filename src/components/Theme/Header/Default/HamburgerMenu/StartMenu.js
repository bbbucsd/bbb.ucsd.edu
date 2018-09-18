import React, { Component } from 'react';
import HamburgerNav, { HamburgerNavGroup, HamburgerNavItem } from 'components/Theme/HamburgerNav';

class StartMenu extends Component {

  render() {
    const { onClick } = this.props;
    return (
      <HamburgerNav text="Start Here">
        <HamburgerNavGroup>
          <HamburgerNavItem onClick={onClick} to="/start">Getting Started</HamburgerNavItem>
          <HamburgerNavItem onClick={onClick} to="/about">About</HamburgerNavItem>
          <HamburgerNavItem onClick={onClick} to="/community">Join The Community</HamburgerNavItem>
        </HamburgerNavGroup>
      </HamburgerNav>
    );
  }
}

export default StartMenu;

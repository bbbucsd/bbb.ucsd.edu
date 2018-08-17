import React, { Component } from 'react';
import SubNav, { SubNavGroup, SubNavItem } from 'components/Theme/SubNav';

class LearnMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <SubNav text="Learn" to="/learn" floating={floating} menuWidth={280} offsetY={85} padding={40}>
        <SubNavGroup>
          <SubNavItem to="/learn/brand-identity">Brand & Identity</SubNavItem>
          <SubNavItem to="/learn/marketing-measurement">Marketing & Measurement</SubNavItem>
          <SubNavItem to="/learn/business-operations">Business & Operations</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

export default LearnMenu;

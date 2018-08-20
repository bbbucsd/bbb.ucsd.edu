import React, { Fragment, Component } from 'react';
import Link from 'components/Theme/Link';
import Styles, { styled, css} from 'components/Theme/Styles';
import HamburgerLink from 'components/Theme/HamburgerLink';

const Menu = styled.ul`
  margin-top: 130px;
  color: ${p => p.theme.white};
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
`

class HamburgerMenu extends Component {

  render() {
    return (
      <Fragment>
        <Menu>
          <HamburgerLink to="/about">About</HamburgerLink>
          <HamburgerLink to="/volunteer">Volunteer</HamburgerLink>
          <HamburgerLink to="/inside-the-prison">Inside The Prison</HamburgerLink>
          <HamburgerLink to="/contact">Contact</HamburgerLink>
        </Menu>
      </Fragment>
    );
  }

}

export default HamburgerMenu;

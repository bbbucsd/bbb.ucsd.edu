import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import Styles, { styled, css} from 'components/Theme/Styles';

const Menu = styled.ul`
  margin-top: 30px;
  color: #999;
  width: 100%;
  font-size: 14px;
  text-transform: uppercase;
  font-family: $fontFamilyTitle;
  font-weight: 300;
  font-style: normal;
`


class HamburgerMenu extends Component {

  render() {
    return (
      <Menu>
        <li>Find a Sales Rep</li>
        <li>Find a Dealer</li>
        <li>Events</li>
        <li>Training</li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </Menu>
    );
  }
}

export default HamburgerMenu;

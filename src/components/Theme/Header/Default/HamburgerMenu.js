import React, { Fragment, Component } from 'react';
import { styled } from 'components/Theme/Styles';
import Logo from 'components/Theme/Logo';
import HamburgerLink from 'components/Theme/HamburgerLink';
import Link from 'components/Theme/Link';

const Menu = styled.ul`
  margin-top: 10px;
  color: ${p => p.theme.white};
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  overflow: scroll;
`

const LogoContainer = styled.div`
  max-width: 200px;
  margin: 10px auto 25px auto;
`;

class HamburgerMenu extends Component {

  render() {
    const { onClick } = this.props;
    return (
      <Fragment>
        <Menu>
          <LogoContainer>
            <Link onClick={onClick} to="/">
              <Logo />
            </Link>
          </LogoContainer>
          <HamburgerLink to="/about-us" onClick={onClick}>About Us</HamburgerLink>
          <HamburgerLink to="/how-we-work" onClick={onClick}>How We Work</HamburgerLink>
          <HamburgerLink to="/how-to-volunteer" onClick={onClick}>How to Volunteer</HamburgerLink>
          <HamburgerLink to="/prison-rules" onClick={onClick}>Prison Rules</HamburgerLink>
          <HamburgerLink to="/book-suggestions" onClick={onClick}>Book Suggestions</HamburgerLink>
          <HamburgerLink to="/contact-info" onClick={onClick}>Contact Info</HamburgerLink>
        </Menu>
      </Fragment>
    );
  }
}

export default HamburgerMenu;

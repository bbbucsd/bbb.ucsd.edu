import React, { Fragment, Component } from 'react';
import { styled } from 'components/Theme/Styles';
import Logo from 'components/Theme/Logo';
import StartMenu from './HamburgerMenu/StartMenu';
import LearnMenu from './HamburgerMenu/LearnMenu';
import WorkWithMeMenu from './HamburgerMenu/WorkWithMeMenu';
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
          <StartMenu onClick={onClick} />
          <LearnMenu onClick={onClick} />
          <WorkWithMeMenu onClick={onClick} />
        </Menu>
      </Fragment>
    );
  }
}

export default HamburgerMenu;

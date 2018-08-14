import React, { Fragment, Component } from 'react';
import Link from 'components/Theme/Link';
import Styles, { styled, css} from 'components/Theme/Styles';
import ProductMenu from './HamburgerMenu/ProductMenu';
import IndustriesMenu from './HamburgerMenu/IndustriesMenu';
import WorkWithMeMenu from './HamburgerMenu/WorkWithMeMenu';

const Menu = styled.ul`
  margin-top: 130px;
  color: #999;
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
`

const Header = styled.li`
  font-size:${p => p.theme.h2FontSize*2}px;
`;

const Item = styled.li`

`;


class HamburgerMenu extends Component {

  render() {
    return (
      <Fragment>
        <Menu>
          <ProductMenu  />
          <IndustriesMenu />
          <WorkWithMeMenu />
        </Menu>
      </Fragment>
    );
  }
}

export default HamburgerMenu;

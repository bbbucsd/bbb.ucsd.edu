import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import Styles, { styled, css} from 'components/Theme/Styles';
import ProductMenu from './HamburgerMenu/ProductMenu';
import IndustriesMenu from './HamburgerMenu/IndustriesMenu';
import SupportMenu from './HamburgerMenu/SupportMenu';

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
      <React.Fragment>
        <Menu>
          <ProductMenu  />
          <IndustriesMenu />
          <SupportMenu />
        </Menu>
      </React.Fragment>
    );
  }
}

export default HamburgerMenu;

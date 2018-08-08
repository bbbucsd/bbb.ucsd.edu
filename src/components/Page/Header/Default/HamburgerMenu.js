import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import Styles, { styled, css} from 'components/Theme/Styles';

const Menu = styled.ul`
  margin-top: 30px;
  color: #999;
  width: 100%;
  font-size: 14px;
  text-transform: uppercase;
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
          <Header>Products</Header>
          <Header>Industries</Header>
          <Header>Support</Header>
          <Item><Link to="/contact-us">Contact Us</Link></Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default HamburgerMenu;

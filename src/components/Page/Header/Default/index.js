import React, { Component } from 'react'
import Styles, { styled, css} from 'components/Theme/Styles';
import Link from 'components/Theme/Link'
import { Menu } from 'styled-icons/material/Menu.cjs'
import Waypoint from 'react-waypoint'
import ProductMenu from './ProductMenu'
import IndustriesMenu from './IndustriesMenu'
import SupportMenu from './SupportMenu'
import HowToBuyMenu from './HowToBuyMenu'
import HamburgerMenu from './HamburgerMenu'

const Header = styled.div`
  position: fixed;
  top:0;
  left: 0;
  padding: 20px;
  z-index: 99;
  background-color: transparent;
  width: 100%;
  color: white;
  ${props => props.floating ? 'background-color: #f0f0f0;' : null }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width:90%;
  margin: 0 auto;
`;

const NavBarLeft = styled.ul `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 0 0 135px;
  margin-right: auto;
  margin-left:0;
`;

const ListItem = styled.li`
  color: white;
  font-size: 16px;
  padding: 0;
  font-weight: 300;
  font-style: normal;
  line-height: 32px;
  &:hover {
    color: white;
  }
`;

const Logo = styled.span`
  font-family: 'Termina';
  font-size: 20px;
  display:inline-block;
  position: relative;
  font-weight: 600;
  font-style: normal;
  transform: scaleX(.8);
  color: ${props => props.floating ? '#000' : '#fff' };
`;

const navItems = 4;
const navBarCenterWidth = 500;

const NavBarCenter = styled.ul`
  flex-direction: row;
  justify-content: space-around;
  width: ${navBarCenterWidth}px;
  ${ Styles.media.mobile`display:none` }
  ${ Styles.media.desktop`display:flex` }
  ${ Styles.media.tablet`display:flex` }
`;

const NavBarCenterItem = styled(ListItem)`
  width: ${navBarCenterWidth / navItems}px;
  text-align: center;
`;

const NavBarRight = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 135px;
  margin-left: auto;
`;

const MenuIcon = styled(Menu)`
  position: relative;
  top: 5px;
  height:30px;
  cursor: pointer;
  fill: ${props => props.floating ? '#000000' : '#FFFFFF' };
`;

const Drawer = styled.div`
  position: fixed;
  background-color: #FFFFFF;
  right:0;
  top:0;
  height: 100vh;
  padding:40px;
  display: ${props => props.open ? 'flex' : 'none' };
  z-index:101;
`;

const DrawerBackDrop = styled.div`
  position:absolute;
  display: ${props => props.open ? 'flex' : 'none' };
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100vh;
  background-color: rgba(0,0,0,0.5);
  z-index:100;
`;

class Default extends Component {
    state = {
      floating: true,
      drawer: false
    };

    floatHeader = () => {
      this.setState({ floating: true });
    };

    unFloatHeader = () => {
      this.setState({ floating: false });
    };

    toggleDrawer = () => {
      this.setState({ drawer: !this.state.drawer });
    };

    render() {
      return (
        <div>
          <Header floating={this.state.floating}>
            <NavBar>
              <NavBarLeft>
                <ListItem>
                  <Logo floating={this.state.floating}><Link to="/">PROLUXE</Link></Logo>
                </ListItem>
              </NavBarLeft>

              <NavBarCenter>
                <NavBarCenterItem><ProductMenu floating={this.state.floating} /></NavBarCenterItem>
                <NavBarCenterItem><IndustriesMenu floating={this.state.floating} /></NavBarCenterItem>
                <NavBarCenterItem><SupportMenu floating={this.state.floating} /></NavBarCenterItem>
                <NavBarCenterItem><HowToBuyMenu floating={this.state.floating} /></NavBarCenterItem>
              </NavBarCenter>

              <NavBarRight>
                <ListItem>
                  <MenuIcon icon="md-menu" onClick={this.toggleDrawer} floating={this.state.floating} />
                </ListItem>

                <Drawer open={this.state.drawer} >
                  <HamburgerMenu />
                </Drawer>

                <DrawerBackDrop open={this.state.drawer} onClick={this.toggleDrawer} />

              </NavBarRight>
            </NavBar>
          </Header>

          <Waypoint onEnter={this.unFloatHeader} onLeave={this.floatHeader} />
        </div>
      );
    }
}



export default Default;

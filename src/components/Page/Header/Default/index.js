import React, { Component } from 'react'
import Styles, { styled, css, media } from 'components/Theme/Styles';
import Link from 'components/Theme/Link'
import ThemeButton from 'components/Theme/Button';
import { Menu } from 'styled-icons/feather/Menu.cjs'
import { Close } from 'styled-icons/material/Close.cjs'
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
  
  ${media.lessThan("medium")`
    padding:10px;
  `}
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width:90%;
  margin: 0 auto;
  ${media.lessThan("medium")`
    height: 35px;
    width:98%;
  `}
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
  font-family: 'Termina',serif;
  font-size: 20px;
  display:inline-block;
  position: relative;
  font-weight: 600;
  font-style: normal;
  transform: scaleX(.8);
  color: ${props => props.floating ? '#000' : '#fff' };
  ${media.lessThan("medium")`
    left:-13px;
  `}
`;

const Tm = styled.span`
  font-size:12px;
  vertical-align: super;
  position:relative;
  left:4px;
  top:-2px;
  
  ${media.lessThan("medium")`
    
  `}
`;

const navItems = 4;
const navBarCenterWidth = 500;

const NavBarCenter = styled.ul`
  flex-direction: row;
  justify-content: space-around;
  width: ${navBarCenterWidth}px;
  
  ${media.lessThan("medium")`
    display:none;
  `}
  
  ${media.greaterThan("medium")`
    display:flex;
  `}
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
  top: -1px;
  height:30px;
  cursor: pointer;
  color: ${props => props.floating ? '#000000' : '#FFFFFF' };
  
  ${media.greaterThan("medium")`
    display:none;
  `}
`;

const CloseIcon = styled(Close)`
  position: absolute;
  height:30px;
  cursor: pointer;
  margin-left:-30px;
  z-index: ${p => p.visible ? 105 : null};
  display: ${p => p.visible ? null : 'none'};
  color: ${p => p.theme.black };
`;

const Drawer = styled.div`
  position: fixed;
  background-color: #FFFFFF;
  right:0;
  top:0;
  left:0;
  height: 100vh;
  padding:40px;
  display: ${props => props.open ? 'flex' : 'none' };
  z-index:101;
`;

const ContactUs = styled(ThemeButton)`
  font-weight: ${p => p.floating ? null : 'bold' };
  background-color: ${p => p.floating ? p.theme.primaryColor : p.theme.white };
  color: ${p => p.floating ? null : p.theme.black };
  ${media.lessThan("medium")`
    display:none;
  `}
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
                  <Logo floating={this.state.floating}><Link to="/">PROLUXE<Tm>™</Tm></Link></Logo>
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
                  <MenuIcon onClick={this.toggleDrawer} floating={this.state.floating} />
                  <CloseIcon visible={this.state.drawer} onClick={this.toggleDrawer} floating={this.state.floating} />
                </ListItem>

                <Drawer open={this.state.drawer} >
                  <HamburgerMenu />
                </Drawer>

                <ContactUs arrow={false} floating={this.state.floating}>
                  Talk to Us
                </ContactUs>
              </NavBarRight>
            </NavBar>
          </Header>

          <Waypoint onEnter={this.unFloatHeader} onLeave={this.floatHeader} />
        </div>
      );
    }
}



export default Default;

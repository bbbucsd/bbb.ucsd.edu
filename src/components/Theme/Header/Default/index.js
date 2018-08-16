import React, { Component } from 'react'
import { styled, css, media } from 'components/Theme/Styles';
import Logo from 'components/Theme/Logo';
import Link from 'components/Theme/Link';
import HamburgerMenu from './HamburgerMenu';
import MainMenu from './MainMenu';
import SearchBar from './SearchBar';

const Header = styled.div`
  position: fixed;
  top:0;
  left: 0;
  padding: 20px;
  z-index: 99;
  width: 100%;
  color: white;
  transition: all 0.5s;

  background-color: ${p => p.floating ? p.theme.headerColor : 'transparent' };

  ${media.lessThan("medium")`
    padding:10px;
    background-color:#ffffff;
  `}
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
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
  flex: 0 0 150px;
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
  display:flex;
  flex-direction:row;
  &:hover {
    color: white;
  }
`;

const LogoLink = styled(Link)`
  width: 175px;
`;

const navItems = 4;
const navBarCenterWidth = 500;

const NavBarCenter = styled.ul`
  flex-direction: row;
  justify-content: space-around;
  width: ${navBarCenterWidth}px;
  position:relative;
  top:2px;

  ${media.lessThan("medium")`
    display:none;
  `}

  ${media.greaterThan("medium")`
    display:flex;
  `}
`;

const NavBarRight = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 150px;
  margin-left: auto;
`;

let IconSize = 30;
let LineLeft = IconSize / 3.2;
let LineOffset = IconSize / 2;
let LineWidth = 18;


const HamburgerMenuIcon = styled.div`
  cursor: pointer;
  position: relative;
  width: ${IconSize}px;
  height: ${IconSize}px;
  transition: all 0.25s;
  transform: ${p => p.open ? 'rotate(90deg)' : null };
  z-index:105;

  span {
    background-color: #000;
  }

  &:hover {
    span {
      background-color: #999;
    }
  }

  ${media.greaterThan("medium")`
    display:none;
  `}
`;

const HamburgerLine = css`
  content: '';
  display: block;
  position: absolute;
  left: ${LineLeft}px;
  width: ${LineWidth}px;
  height: 2px;
  transform: rotate(0);
  transition: all 0.25s;
`;

const TopLine = styled.span`
  ${HamburgerLine};
  top: ${LineOffset - 2}px;
  transform: ${p => p.open ? 'rotate(45deg) translateY(0px)' : 'translateY(-2px)' };
`;

const BottomLine = styled.span`
  ${HamburgerLine};
  bottom: ${LineOffset}px;
  transform: ${p => p.open ? 'rotate(-45deg) translateY(0px)' : 'translateY(7px)' };

`;

const Drawer = styled.div`
  position: fixed;
  background-color: #FFFFFF;
  right:0;
  top:0;
  left:0;
  display: flex;
  z-index:101;
  opacity: 0;
  height:0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.5s;
  will-change: transform;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  ${p => p.open ? `
    opacity: 1;
    height:100vh;
    visibility: visible;
  ` : null}
`;


class Default extends Component {
    state = {
      floating: false,
      drawer: false,
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

    displayHeader() {
      let value = window.scrollY;
      let winHeight = window.innerHeight;
      let body = document.body;
      let html = document.documentElement;
      let docHeight = Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
      let max = docHeight - winHeight;
      let percent = (value / max) * 100;
      if (percent > 5) {
        this.floatHeader()
      } else {
        this.unFloatHeader()
      }
    }

    componentWillMount() {
      if (typeof window === "undefined") { return; }
      this.displayHeader();
      window.addEventListener('scroll', this.displayHeader.bind(this));
    }

    render() {
      return (
        <div>
          <Header floating={this.state.floating}>
            <NavBar>
              <NavBarLeft>
                <ListItem>
                  <LogoLink to="/"><Logo color={this.state.floating ? 'blueWhite' : 'white'} /></LogoLink>
                </ListItem>
              </NavBarLeft>

              <NavBarCenter>
                <ListItem>
                  <MainMenu floating={this.state.floating} />
                </ListItem>
              </NavBarCenter>

              <NavBarRight>
                <ListItem>
                  {/* <SearchBar floating={this.state.floating} /> */}
                  <HamburgerMenuIcon open={this.state.drawer} onClick={this.toggleDrawer} floating={this.state.floating}>
                    <TopLine open={this.state.drawer} />
                    <BottomLine open={this.state.drawer} />
                  </HamburgerMenuIcon>

                  <Drawer open={this.state.drawer} >
                    <HamburgerMenu />
                  </Drawer>
                </ListItem>
              </NavBarRight>
            </NavBar>
          </Header>
        </div>
      );
    }
}



export default Default;

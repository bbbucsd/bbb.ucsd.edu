import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'gatsby-link';
import Waypoint from 'react-waypoint';
import { Menu as MenuIcon } from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';

// Elements
import ProductMenu from './ProductMenu';
import IndustriesMenu from './IndustriesMenu';
import SupportMenu from './SupportMenu';
import HamburgerMenu from './HamburgerMenu';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);


class Header extends Component {
    constructor(props) {
      super(props);
      this.state = { floating: true, drawer: false  };
    };

    floatHeader = (e) => {
      this.setState({ floating: true });
    };

    unFloatHeader = (e) => {
      this.setState({ floating: false });
    };

    toggleDrawer = () => {
      this.setState({ drawer: !this.state.drawer });
    };

    render() {
      return (
        <div>
          <div className={cx({header: true, floatingBg: this.state.floating})}>
            <div className={style.navBar}>
              <List className={style.navBarLeft}>
                <ListItem className={style.listItem}>
                  <Link to="/" className={cx({floatingCopy: this.state.floating, fixedCopy: !this.state.floating})}>PROLUXE</Link>
                </ListItem>
              </List>

              <List className={style.navBarCenter}>
                <ListItem className={cx({listItem: true, centerItem: true})}><ProductMenu className={cx({floatingCopy: this.state.floating, fixedCopy: !this.state.floating})} /></ListItem>
                <ListItem className={cx({listItem: true, centerItem: true})}><IndustriesMenu className={cx({floatingCopy: this.state.floating, fixedCopy: !this.state.floating})} /></ListItem>
                <ListItem className={cx({listItem: true, centerItem: true})}><SupportMenu className={cx({floatingCopy: this.state.floating, fixedCopy: !this.state.floating})} /></ListItem>
                <ListItem className={cx({listItem: true, centerItem: true})}><Link to="/" className={cx({floatingCopy: this.state.floating, fixedCopy: !this.state.floating})}>How to buy</Link></ListItem>
              </List>

              <List className={style.navBarRight}>
                <ListItem className={style.listItem}>
                  <MenuIcon className={cx({menuIcon: true, floatingCopy: this.state.floating, fixedCopy: !this.state.floating})} onClick={this.toggleDrawer} />
                </ListItem>

                <Drawer anchor='right' open={this.state.drawer} onClose={this.toggleDrawer} classes={{paperAnchorRight: style.sideMenu}}>
                  <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}></div>
                  <HamburgerMenu />
                </Drawer>
              </List>
            </div>
          </div>

          <Waypoint onEnter={this.unFloatHeader} onLeave={this.floatHeader} />
        </div>
      );
    }
}



export default Header;

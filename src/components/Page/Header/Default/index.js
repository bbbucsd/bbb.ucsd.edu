import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'gatsby-link';
import Waypoint from 'react-waypoint';
import { Menu as MenuIcon } from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import ProductMenu from './ProductMenu/index';
import IndustriesMenu from './IndustriesMenu/index';
import SupportMenu from './SupportMenu/index';
import HamburgerMenu from './HamburgerMenu/index';
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);


class Default extends Component {
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
                  <Link to="/" className={cx({logo: true, floatingCopy: this.state.floating, fixedCopy: !this.state.floating})}>PROLUXE</Link>
                </ListItem>
              </List>

              <List className={style.navBarCenter}>
                <ListItem className={cx({listItem: true, centerItem: true})}><ProductMenu floating={this.state.floating} /></ListItem>
                <ListItem className={cx({listItem: true, centerItem: true})}><IndustriesMenu floating={this.state.floating} /></ListItem>
                <ListItem className={cx({listItem: true, centerItem: true})}><SupportMenu floating={this.state.floating} /></ListItem>
                <ListItem className={cx({listItem: true, centerItem: true})}><Link to="/" className={cx({floatingCopy: this.state.floating, fixedCopy: !this.state.floating})}>How to buy</Link></ListItem>
              </List>

              <List className={style.navBarRight}>
                <ListItem className={style.listItem}>
                  <MenuIcon className={cx({menuIcon: true, floatingCopy: this.state.floating, fixedCopy: !this.state.floating})} onClick={this.toggleDrawer} />
                </ListItem>

                <Drawer anchor='right' open={this.state.drawer} onClose={this.toggleDrawer} >
                  <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
                    <HamburgerMenu />
                  </div>
                </Drawer>
              </List>
            </div>
          </div>

          <Waypoint onEnter={this.unFloatHeader} onLeave={this.floatHeader} />
        </div>
      );
    }
}



export default Default;

import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Link from 'gatsby-link';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { Menu as MenuIcon } from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import classNames from 'classnames';

import SideMenu from './Navigation/Header/SideMenu';


const styles = theme => ({
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    padding: global.smallPadding,
    zIndex: '99',
    backgroundColor: 'transparent',
    width: '100%',
    color: 'white',
  },
  floatingBg: {
    backgroundColor: global.brandSecondary,
  },
  floatingCopy: {
    color: global.white + ' !important',
    '&:hover': {
      color: '#fff',
    },
  },
  fixedCopy: {
    color: '#fff !important',
    '&:hover': {
      color: '#fff !important',
    },
  },
  logo: {
    fontSize: '20px !important',
    position: 'relative',
    fontWeight: '600',
    fontStyle: 'normal',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '75px',
  },
  navBarLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: '0 0 135px',
    marginRight: 'auto',
  },
  navBarCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '500px',
  },
  navBarRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: '0 0 135px',
    marginLeft: 'auto',
  },
  listItem: {
    color: '#fff',
    fontFamily: 'lato',
    fontSize: '16px',
    padding: '0 !important',
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: '32px',
    '&:hover': {
      color: '#fff',
    }
  },
  centerItem: {
    width: '100px',
  },
  sideMenu: {
    position: 'fixed',
    width: '220px',
  },
  menuIcon: {
    position: 'absolute',
    right: '0',
  },
})

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
      const { classes } = this.props;
      return (
        <div>
          <div className={`${classes.header} ${this.state.floating ? classes.floatingBg : ''}`}>
            <div className={`wrapper ${classes.navBar}`}>
              <List className={classes.navBarLeft}>
                <ListItem className={classes.listItem}>
                  <Link to="/" className={`logo ${this.state.floating ? classes.floatingCopy : classes.fixedCopy} ${classes.logo}`}>Automate Your Brand</Link>
                </ListItem>
              </List>

              <List className={classes.navBarRight}>
                <List className={classes.navBarCenter}>
                  <ListItem className={`${classes.listItem} ${classes.centerItem}`}><Link to="/start-here" className={`${this.state.floating ? classes.floatingCopy : classes.fixedCopy}`}>Start Here</Link></ListItem>
                  <ListItem className={`${classes.listItem} ${classes.centerItem}`}><Link to="/about" className={`${this.state.floating ? classes.floatingCopy : classes.fixedCopy}`}>About</Link></ListItem>
                </List>

                <ListItem className={`${classes.listItem}`}>
                  <MenuIcon className={`${classes.menuIcon} ${this.state.floating ? classes.floatingCopy : classes.fixedCopy}`} onClick={this.toggleDrawer} />
                </ListItem>

                <Drawer anchor='right' open={this.state.drawer} onClose={this.toggleDrawer} classes={{paperAnchorRight: classes.sideMenu}}>
                  <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}></div>
                  <SideMenu />
                </Drawer>
              </List>
            </div>
          </div>

          <Waypoint onEnter={this.unFloatHeader} onLeave={this.floatHeader} />
        </div>
      );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(Header);

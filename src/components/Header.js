import React, { Component } from 'react';

import List, { ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import Waypoint from 'react-waypoint';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';

import MainMenu from './Navigation/Header/MainMenu';
import SideMenu from './Navigation/Header/SideMenu';


const styles = theme => ({
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    // backgroundColor: '#281f26',
    padding: global.smallPadding,
    zIndex: '99',
    backgroundColor: 'transparent',
    width: '100%',
    color: 'white',
  },
  floatingBg: {
    backgroundColor: '#f0f0f0',
  },
  floatingCopy: {
    color: '#000 !important',
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
    //fontFamily: 'aviano-sans, sans-serif !important',
    //fontFamily: 'ff-ginger-pro !important',
    fontFamily: 'termina !important',
    fontSize: '20px !important',
    position: 'relative',
    fontWeight: '600',
    fontStyle: 'normal',
    transform: 'scaleX(.8)',
    left: '-12px',
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
});

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = { floating: true, drawer: false  };
    }

    floatHeader() {
      this.setState({ floating: true });
    }

    unFloatHeader() {
      this.setState({ floating: false });
    }

    toggleDrawer() {
      this.setState({ drawer: !this.state.drawer });
    }

    render() {
      const { classes } = this.props;
      return (
        <div>
          <div className={`${classes.header} ${this.state.floating ? classes.floatingBg : ''}`}>
            <div className={`wrapper ${classes.navBar}`}>
              <List className={classes.navBarLeft}>
                <ListItem className={classes.listItem}>
                  <Link to="/" className={`${this.state.floating ? classes.floatingCopy : classes.fixedCopy} ${classes.logo}`}>PROLUXE</Link>
                </ListItem>
              </List>

              <MainMenu className={classes.navBarCenter} floating={this.state.floating} />

              <List className={classes.navBarRight}>
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

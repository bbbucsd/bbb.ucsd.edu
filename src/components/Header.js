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

import MainMenu from './Navigation/Header/MainMenu';

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
    backgroundColor: '#2D3B45',
  },
  floatingCopy: {
    color: '#fff !important',
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
    transform: 'scaleX(.8)',
    left: '-12px',
  },
  sideMenu: {
    marginTop: '30px',
    color: '#999',
    width: '100%',
    fontSize: '14px',
    textTransform: 'uppercase',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '60px',
  },
  navBarLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: '0 0 135px',
    marginRight: 'auto',
  },
  navBarRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '500px',
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
  sideDrawer: {
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
                <Link to="/" className={classNames("logo", classes.logo, {
                  [classes.floatingCopy]: this.state.floating,
                  [classes.fixedCopy]: !this.state.floating
                })}>
                  {process.env.SITE_NAME}
                </Link>
              </ListItem>
            </List>

            <Hidden smDown>
              <MainMenu className={classes.navBarRight} listClassName={classNames(classes.listItem, classes.centerItem)} floating={this.state.floating} />
            </Hidden>

            <Hidden mdUp>
              <List className={classes.navBarRight}>
                <ListItem className={`${classes.listItem}`}>
                  <MenuIcon className={`${classes.menuIcon} ${this.state.floating ? classes.floatingCopy : classes.fixedCopy}`} onClick={this.toggleDrawer.bind(this)} />
                </ListItem>

                <Drawer anchor='right' open={this.state.drawer} onClose={this.toggleDrawer.bind(this)} classes={{paperAnchorRight: classes.sideDrawer}}>
                  <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}></div>
                  <MainMenu listClassName={classes.sideMenu} />
                </Drawer>
              </List>
            </Hidden>
          </div>
        </div>

        <Waypoint onEnter={this.unFloatHeader.bind(this)} onLeave={this.floatHeader.bind(this)} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(Header);

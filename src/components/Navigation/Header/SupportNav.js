import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

import SubNav from './SubNav';
import SubNavGroup from './SubNavGroup';
import SubNavItem from './SubNavItem';

import EmailIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

import Button from '../../Elements/Button';

const styles = theme => ({
  icon: {
    color: '#999',
    height: '16px',
    width: '16px',
    marginRight: '5px',
    position: 'relative',
    top: '2px',
  },
  fastestRoute: {
    width: '100% !important',
  },
  fastestRouteItem: {
    height: '20px',
    marginBottom: '35px',
  },
  fastestRouteItemButton: {
    marginRight: '5px'
  },
  or: {
    textAlign: 'center',
    width: '100%',
  }
})

class SupportNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  render() {
    const { classes } = this.props;

    return (
      <SubNav text="Support" className={this.props.className} menuWidth={480} offsetY={85} padding={20}>
        <SubNavGroup>
          <SubNavItem>
            <SubNavGroup innerClassName={classes.fastestRoute}>
              <SubNavItem>
                <div className={classes.fastestRouteItem}>
                  <Button to="/" text="Get Help" size="small" className={classes.fastestRouteItemButton} /> For the fastest and easiest way to get help.
                </div>
              </SubNavItem>
            </SubNavGroup>
          </SubNavItem>
          <SubNavItem>
            <SubNavGroup title="Email Us">
              <SubNavItem><EmailIcon className={classes.icon} /><a href="mailto: support@proluxe.com">support@proluxe.com</a></SubNavItem>
            </SubNavGroup>
            <SubNavGroup title="Call Us">
              <SubNavItem><PhoneIcon className={classes.icon} /><a href="callto:1-800-624-6717">1.800.624.6717</a></SubNavItem>
            </SubNavGroup>
          </SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

SupportNav.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(SupportNav);

import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

import SubNav from './SubNav';
import SubNavGroup from './SubNavGroup';
import SubNavItem from './SubNavItem';

const styles = theme => ({
  root: {

  }
})

class ContactNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  render() {
    const { classes } = this.props;

    return (
      <SubNav text="Contact Us" className={`${classes.root} ${this.props.className}`} menuWidth={280} offsetY={85} padding={40}>
        <SubNavGroup>
          <SubNavItem>Restaurants</SubNavItem>
          <SubNavItem>Healthcare</SubNavItem>
          <SubNavItem>Hospitality</SubNavItem>
          <SubNavItem>Education</SubNavItem>
          <SubNavItem>Business</SubNavItem>
          <SubNavItem>Groceries & Supermarkets</SubNavItem>
          <SubNavItem>Convenience Stores</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

ContactNav.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(ContactNav);

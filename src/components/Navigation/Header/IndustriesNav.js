import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

import SubNav from './SubNav';
import SubNavGroup from './SubNavGroup';
import SubNavItem from './SubNavItem';

const styles = theme => ({
  root: {

  }
})

class IndustriesNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  render() {
    const { classes } = this.props;

    return (
      <SubNav text="Industries" className={`${classes.root} ${this.props.className}`} menuWidth={280} offsetY={85} padding={40}>
        <SubNavGroup>
          <SubNavItem to="/industries/restaurants">Restaurants</SubNavItem>
          <SubNavItem to="/industries/healthcare">Healthcare</SubNavItem>
          <SubNavItem to="/industries/hospitality">Hospitality</SubNavItem>
          <SubNavItem to="/industries/education">Education</SubNavItem>
          <SubNavItem to="/industries/business">Business</SubNavItem>
          <SubNavItem to="/industries/supermarkets">Groceries & Supermarkets</SubNavItem>
          <SubNavItem to="/industries/convenience-stores">Convenience Stores</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

IndustriesNav.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(IndustriesNav);

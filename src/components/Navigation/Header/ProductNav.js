import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

import SubNav from './SubNav'
import SubNavGroup from './SubNavGroup'
import SubNavItem from './SubNavItem'

const styles = theme => ({
  root: {

  }
})

class ProductNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  render() {
    const { classes } = this.props;

    return (
      <SubNav text="Products" className={`${classes.root} ${this.props.className}`}>
        <SubNavGroup title="Cooking">
          <SubNavItem to="/products/smart-oven">Smart Ovens</SubNavItem>
          <SubNavItem to="/products/stone-hearth-ovens">Stone Hearth Ovens</SubNavItem>
          <SubNavItem to="/products/custom-ovens">Custom Ovens</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Grilling">
          <SubNavItem to="/products/clamshell-grills">Clamshell Grills</SubNavItem>
          <SubNavItem to="/products/panini-grills">Panini Grills</SubNavItem>
          <SubNavItem to="/products/tortilla-grills">Tortilla Grills</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Food Prep">
          <SubNavItem to="/products/pizza-presses">Pizza Presses</SubNavItem>
          <SubNavItem to="/products/tortilla-presses">Tortilla Presses</SubNavItem>
          <SubNavItem to="/products/bun-carmalizers">Bun Carmalizers</SubNavItem>
        </SubNavGroup>

        <SubNavGroup title="Accessories">
          <SubNavItem to="/products/storage">Storage</SubNavItem>
          <SubNavItem to="/products/pizza-dough">Pizza dough</SubNavItem>
          <SubNavItem to="/products/cookware-and-cleaners">Cookware/Cleaners</SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

ProductNav.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(ProductNav);

import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'gatsby-link';

const styles = theme => ({
  root: {
    marginTop: '30px',
    color: '#999',
    width: '100%',
    fontSize: '14px',
    textTransform: 'uppercase',
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
  }
})

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        <ListItem>Find a Sales Rep</ListItem>
        <ListItem>Find a Dealer</ListItem>
        <ListItem>Events</ListItem>
        <ListItem>Training</ListItem>
        <ListItem><Link to="/contact-us">Contact Us</Link></ListItem>
      </List>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(SideMenu);

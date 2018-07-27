import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = theme => ({
  navGroupItem: {
    paddingTop:'1px',
    paddingBottom:'1px',
    fontSize: '14px',
    paddingLeft: '0',
    paddingRight: '0',
  },
})

class SubNavItem extends Component {
  link() {
    return <Link to={this.props.to || ''}>{this.props.children}</Link>
  }

  text() {
    return this.props.children
  }

  render() {
    const { classes } = this.props;

    return (
      <ListItem className={`${classes.navGroupItem} ${this.props.className}`}>{ this.props.to ? this.link() : this.text() }</ListItem>
    );
  }
}

SubNavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(SubNavItem);

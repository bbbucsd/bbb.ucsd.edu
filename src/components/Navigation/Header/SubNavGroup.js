import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import List, { ListItem } from 'material-ui/List';

const styles = theme => ({
  navGroup: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 !important',
    justifyContent: 'space-between',
  },
  navGroupTitle: {
    fontSize: '13px',
    borderBottom: '1px solid #cacaca',
    marginBottom: '5px',
    paddingLeft: '0',
    paddingRight: '0',
    textTransform: 'uppercase',
  },
  navItemGroup: {
    width: '90%',
  },
})

class SubNavGroup extends Component {
  render() {
    const { classes } = this.props;

    const title = this.props.title != null ? (
      <ListItem className={classes.navGroupTitle}>{this.props.title}</ListItem>
    ) : (
      ''
    );

    return (
      <ListItem className={`${classes.navGroup} ${this.props.className}`}>
        <List className={` ${classes.navItemGroup} ${this.props.innerClassName}`} >
          {title}
          {this.props.children}
        </List>
      </ListItem>
    );
  }
}

SubNavGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(SubNavGroup);

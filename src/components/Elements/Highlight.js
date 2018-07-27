import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  largeText: {
    margin: 0,
    padding: 0,
    fontWeight: '200',
  },
  smallText: {
    fontWeight: '200',
    fontSize:'14px',
  }
});

class Highlight extends Component {
  render() {
    const { classes, largeText, smallText } = this.props;

    return (
      <div className={classes.root}>
        <h1 className={classes.largeText} style={{color: this.props.color}}>{largeText}</h1>
        <div className={classes.smallText} style={{color: this.props.color}}>{smallText}</div>
      </div>
    );
  }
}

Highlight.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(Highlight);

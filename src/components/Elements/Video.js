import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index'
import withWidth from '@material-ui/core/withWidth/index'


const styles = theme => ({
  root: {
    left: 0,
    right: 0,
    top: 0,
    opacity: '0.2',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
    display: 'block'
  }
})


class Video extends Component {

  render() {
    const { classes, src } = this.props;

    return (
      <video loop autoPlay playsInline className={classes.root}>
        <source src={src} type="video/mp4"/>
      </video>
    );
  }
}


Video.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(Video);

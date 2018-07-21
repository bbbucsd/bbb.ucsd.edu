import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import HeroTypography from '../Theme/HeroTypography';
import Highlight from '../Theme/Highlight'
import Button from '../Theme/Button';

const styles = theme => ({
  scope: {
    backgroundImage: 'linear-gradient(to right bottom, #35c3dd, #02a6cc, #0089b8, #006ca2, #005089)',
    textAlign: 'center',
    color: 'black',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    minHeight: '80vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',

  },
  reducedHeight: {
    minHeight: '50vh !important',
  },
  scopeVerbiage: {
    width: '100%',
    display: 'flex',
    zIndex: '1',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      top: '100px',
    }
  },
  backgroundVideo: {
    left: '0',
    right: '0',
    top: '0',
    opacity: '0.2',
    objectFit: 'cover',
    width: '100%',
    position: 'absolute',
    zIndex: '0',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      left: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      left: 'auto',
      right: '-200px',
      width: 'auto',
    }
  },
})

class AssetBlock extends Component {
  video() {
    return (
      <div>
        <video loop autoPlay playsInline className={this.props.classes.backgroundVideo}>
          <source src={this.props.url} type="video/mp4" />
        </video>
      </div>
    )
  }

  image() {
    return { backgroundImage: 'url("' + this.props.url + '")' }
  }

  isVideo() {
    return (this.props.contentType === 'video/mp4');
  }

  isImage() {
    return (this.props.contentType == 'image/jpeg');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div style={ this.isImage() ? this.image() : {} } className={`scope ${classes.scope} ${this.props.reducedHeight ? classes.reducedHeight : ''}`}>
          { this.isVideo() ? this.video() : '' }
          <div className={`scope-verbiage ${classes.scopeVerbiage}`}>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}


AssetBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(AssetBlock);

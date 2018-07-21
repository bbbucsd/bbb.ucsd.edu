import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import StandardHeroCopy from './StandardHeroCopy';
import Button from '../Theme/Button';

const styles = theme => ({
  scope: {
    backgroundColor: '#000',
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
    flexDirection: 'row',
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

class StandardHero extends Component {
  video() {
    return (
      <div>
        <video loop autoPlay playsInline className={this.props.classes.backgroundVideo}>
          <source src={this.props.hero.heroAsset.file.url} type="video/mp4" />
        </video>
      </div>
    )
  }

  image() {
    return { backgroundImage: 'url("' + this.props.hero.heroAsset.file.url + '")' }
  }

  cta() {
    return (
      <div className={this.props.classes.cta}>
        <Button  to={this.props.hero.cta} text="Learn More"></Button>
      </div>
    )
  }

  isVideo() {
    if (this.props.hero.heroAsset.file.contentType == 'video/mp4') {
      return true
    } else {
      return false
    }
  }

  isImage() {
    if (this.props.hero.heroAsset.file.contentType == 'image/jpeg') {
      return true
    } else {
      return false
    }
  }

  render() {
    const { classes, hero } = this.props;

    return (
      <div>
        <div style={ this.isImage() ? this.image() : {} } className={`scope ${classes.scope} ${this.props.reducedHeight ? classes.reducedHeight : ''}`}>
          { this.isVideo() ? this.video() : '' }

          <div className={`scope-verbiage ${classes.scopeVerbiage}`}>
            <div>
              <StandardHeroCopy size="h1">{hero.headline}</StandardHeroCopy>
              <StandardHeroCopy size="h2">{hero.subheadline}</StandardHeroCopy>


            </div>
          </div>
        </div>
      </div>
    );
  }
}


StandardHero.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(StandardHero);

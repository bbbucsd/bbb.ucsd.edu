import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

// Elements
import List, { ListItem } from 'material-ui/List';
import Button from '../Theme/Button';


const styles = theme => ({
  root: {
    height: '600px',
  },
  container: {
    display: 'table',
    width: '100%',
    height: '100%',
    padding: '0 !important',
  },
  containerItem: {
    display: 'table-cell',
    width: '50%',
    padding: global.largePadding,
    textAlign: 'left',
    verticalAlign: 'middle',
    backgroundColor: '#fcfcfc',
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
    overflow:'hidden',
  },
  image: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  backgroundVideo: {
    left: '0',
    right: '0',
    top: '0',
    objectFit: 'cover',
    display:'block',
    width: '100%',
    position: 'absolute',
    height: '600px',
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
  subheadline: {
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
    margin:'0',
  },
  secondaryHeadline: {
    color: '#777'
  },
})

class DoubleBlockSection extends Component {
  isReversed() {
    if (this.props.data.reverseDirection) {
      return true
    }
  }

  hasAsset() {
    if (this.props.data.image) {
      return true
    } else {
      return false
    }
  }

  assetBlock() {
    if (this.hasAsset()) {
      if (this.isVideo()) {
        return this.videoBlock()
      } else {
        return this.imageBlock()
      }
    } else {
      return <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`}></ListItem>
    }
  }

  videoBlock() {
    return (
      <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`}>
        <video loop autoPlay playsInline muted className={this.props.classes.backgroundVideo}>
          <source src={this.props.data.image.file.url} type="video/mp4"/>
        </video>
      </ListItem>
    )
  }

  imageBlock() {
    return <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`} style={ this.image() }></ListItem>
  }

  image() {
    return { backgroundImage: 'url("' + this.props.data.image.file.url + '")' }
  }

  backgroundColor() {
    if (this.props.data.image && this.props.data.backgroundColor != '') {
      return { backgroundColor: this.props.data.backgroundColor }
    }
  }

  headlineColor() {
    if (this.props.data.headlineColor != '') {
      return { color: this.props.data.headlineColor }
    }
  }

  subheadlineColor() {
    if (this.props.data.subheadlineColor != '') {
      return { color: this.props.data.subheadlineColor }
    }
  }

  isVideo() {
    if (this.props.data.image.file.contentType == 'video/mp4') {
      return true
    } else {
      return false
    }
  }


  render() {
    const { classes, data } = this.props;

    return (
      <div className={ classes.root }>
        <List className={ classes.container }>
          { this.isReversed() ? this.assetBlock() : '' }
          <ListItem className={ classes.containerItem } style={ this.backgroundColor() }>
            <h1 className={classes.subheadline} style={ this.headlineColor() }>{data.headline}</h1>
            <h2 className={`${classes.subheadline} ${classes.secondaryHeadline}`} style={ this.subheadlineColor() }>{data.subheadline}</h2>
          </ListItem>
          { !this.isReversed() ? this.assetBlock() : '' }
        </List>
      </div>
    )
  }
}

DoubleBlockSection.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(DoubleBlockSection);

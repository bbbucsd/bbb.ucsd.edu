import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

// Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


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

class DoubleBlock extends Component {
  isReversed() {
    if (this.props.slice.primary.direction == 'Asset on the left') {
      return true
    }
  }

  hasAsset() {
    if (this.props.slice.primary.asset && this.props.slice.primary.asset.url) {
      return true
    } else {
      return false
    }
  }

  assetBlock() {
    if (this.hasAsset()) {
      return this.imageBlock()
    } else {
      return <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`}></ListItem>
    }
  }

  videoBlock() {
    return (
      <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`}>
        <video loop autoPlay playsInline muted className={this.props.classes.backgroundVideo}>
          <source src={this.props.slice.image.file.url} type="video/mp4"/>
        </video>
      </ListItem>
    )
  }

  imageBlock() {
    return <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`} style={ this.image() }></ListItem>
  }

  image() {
    return { backgroundImage: 'url("' + this.props.slice.primary.asset.url + '")' }
  }

  backgroundColor() {
    if (this.props.slice.primary.background_color != '') {
      return { backgroundColor: this.props.slice.primary.background_color }
    }
  }

  headlineColor() {
    if (this.props.slice.primary.headline_color != '') {
      return { color: this.props.slice.primary.headline_color }
    }
  }

  subheadlineColor() {
    if (this.props.slice.primary.subheadline_color != '') {
      return { color: this.props.slice.primary.subheadline_color }
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
    const { classes, slice } = this.props;
    console.log(this.props)
    const data = slice.primary;

    return (
      <div className={ classes.root }>
        <List className={ classes.container }>
          { this.isReversed() ? this.assetBlock() : '' }
          <ListItem className={ classes.containerItem } style={ this.backgroundColor() }>
            <h1 className={classes.subheadline} style={ this.headlineColor() }>{data.headline.text}</h1>
            <h2 className={`${classes.subheadline} ${classes.secondaryHeadline}`} style={ this.subheadlineColor() }>{data.subheadline.text}</h2>
          </ListItem>
          { !this.isReversed() ? this.assetBlock() : '' }
        </List>
      </div>
    )
  }
}

DoubleBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(DoubleBlock);

export const query = graphql`
  fragment DoubleBlock on PrismicPageBodyDoubleBlock {
    primary {
      direction
      asset {
        url
      }
      background_color
      headline {
        text
      }
      headline_color
      subheadline {
        text
      }
      subheadline_color
    }
  }
`;

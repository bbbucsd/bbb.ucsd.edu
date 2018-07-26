import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

// Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Validator from '../../utils/validator';

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
    fontFamily: global.fontFamily,
    fontWeight: '300',
    fontStyle: 'normal',
    margin:'0',
  },
  secondaryHeadline: {
    color: '#777'
  },
})

class DoubleBlock extends Component {

  isLeft(data) {
    return !!data.direction.match(/left/i);
  }

  isRight(data) {
    return !!data.direction.match(/right/i);
  }

  hasAsset(data) {
    return !!data.asset;
  }

  assetBlock(data) {
    if (this.hasAsset(data)) {
      if (Validator.isVideo(data.asset.url)) {
        return this.videoBlock(data);
      } else {
        return this.imageBlock(data);
      }
    } else {
      return <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`}></ListItem>
    };
  }

  videoBlock(data) {
    return (
      <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`}>
        <video loop autoPlay playsInline muted className={this.props.classes.backgroundVideo}>
          <source src={data.asset.url} type="video/mp4"/>
        </video>
      </ListItem>
    )
  }

  imageBlock(data) {
    return <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`} style={ this.image(data) }></ListItem>
  }

  image(data) {
    return { backgroundImage: 'url("' + data.asset.url + '")' }
  }

  backgroundColor(data) {
    if (data.asset && data.background_color != '') {
      return { backgroundColor: data.background_color }
    }
  }

  headlineColor(data) {
    if (data.headline_color !== '') {
      return { color: data.headline_color }
    }
  }

  subheadlineColor(data) {
    if (data.subheadline_color !== '') {
      return { color: data.subheadline_color }
    }
  }

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <div className={ classes.root }>
        <List className={ classes.container }>
          { this.isLeft(data) ? this.assetBlock(data) : '' }
          <ListItem className={ classes.containerItem } style={ this.backgroundColor(data) }>
            <h1 className={classes.subheadline} style={ this.headlineColor(data) }>{data.headline.text}</h1>
            <h2 className={`${classes.subheadline} ${classes.secondaryHeadline}`} style={ this.subheadlineColor(data) }>{data.subheadline.text}</h2>
          </ListItem>
          { this.isRight(data) ? this.assetBlock(data) : '' }
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
      headline {
        text
      }
      subheadline {
        text
      }
      headline_color
      subheadline_color
      background_color
      asset {
        url
      }
    }
  }
`;

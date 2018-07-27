import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

// Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Video from './Elements/Video/index'


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
    return (this.props.slice.primary.direction == 'Asset on the left')
  }


  hasAsset() {
    if (this.props.slice.primary.asset && this.props.slice.primary.asset.url) {
      return true
    } else {
      return false
    }
  }

  assetBlock() {
    return (
      <ListItem className={`${this.props.classes.containerItem} ${this.props.classes.image}`}>
        <Video src={this.props.slice.primary.video_asset.url} />
      </ListItem>
    )
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


  render() {
    const { classes, slice } = this.props;
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
  fragment DoubleBlockVideo on PrismicPageBodyDoubleBlockVideo {
    primary {
      direction
      video_asset {
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

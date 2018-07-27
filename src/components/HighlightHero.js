import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
//import AssetBlock from './Theme/Heros/ImageScope';
import Index from './Elements/HeroTypography/index';
import Highlight from './Elements/Highlight';
import Button from './Elements/Button/index';

const styles = theme => ({
  highlightGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    top: '80px',
  },
  diagonalLine: {
    position: 'relative',
    zIndex: 1,
    marginLeft:'-240px',
    marginRight:'-260px',
    width: '80px',
    height: '1px',
    backgroundColor: 'white',
    transform: 'rotate(-65deg)',
  }
})

class HighlightHero extends Component {
  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      //<AssetBlock file={data.hero_asset && data.hero_asset.url}>
        <div>
          <Index size="h3">{data.superheadline.text}</Index>
          <Index size="h1">{data.headline.text}</Index>

          <div className={classes.highlightGroup}>
            <Highlight largeText="#1" smallText="Best Selling Press" color="white" />
            <div className={classes.diagonalLine}></div>
            <Highlight largeText="250" smallText="Pizzas/hour" color="white" />
            <div className={classes.diagonalLine}></div>
            <Highlight largeText='18"' smallText="Pressed Product" color="white" />
          </div>
        </div>
      //</AssetBlock>
    );
  }
}


HighlightHero.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(HighlightHero);

export const query = graphql`
  fragment HighlightHero on PrismicPageBodyHighlightHero  {
    primary {
      superheadline {
        text
      }
      headline {
        text
      }
      hero_asset {
        url
      }
    }
  }
`;

import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import AssetBlock from '../Theme/AssetBlock';
import HeroTypography from '../Theme/HeroTypography';
import Highlight from '../Theme/Highlight';
import Button from '../Theme/Button';

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
      <AssetBlock file={data.hero_asset && data.hero_asset.url}>
        <div>
          <HeroTypography size="h3">{data.superheadline.text}</HeroTypography>
          <HeroTypography size="h1">{data.headline.text}</HeroTypography>

          <div className={classes.highlightGroup}>
            <Highlight largeText="#1" smallText="Best Selling Press" color="white" />
            <div className={classes.diagonalLine}></div>
            <Highlight largeText="250" smallText="Pizzas/hour" color="white" />
            <div className={classes.diagonalLine}></div>
            <Highlight largeText='18"' smallText="Pressed Product" color="white" />
          </div>
        </div>
      </AssetBlock>
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

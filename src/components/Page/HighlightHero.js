import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import AssetBlock from '../Theme/AssetBlock'
import HeroTypography from '../Theme/HeroTypography';
import Highlight from '../Theme/Highlight'
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
    const { classes, hero } = this.props;

    return (
      <AssetBlock url={this.props.hero.heroAsset.file.url} contentType={this.props.hero.heroAsset.file.contentType}>
        <div>
          <HeroTypography size="h3">{hero.superheadline}</HeroTypography>
          <HeroTypography size="h1">{hero.headline}</HeroTypography>

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
  fragment HighlightHero on ContentfulLayoutHighlightHero {
    superheadline
    headline
    heroAsset {
      file {
        url
        contentType
      }
    }
    features {
      headline
      subheadline
    }
  }
`;
import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AssetBlock from '../Theme/AssetBlock';
import HeroTypography from '../Theme/HeroTypography';

const styles = theme => ({

});

class AudioHero extends Component {

  render() {
    const { classes, hero } = this.props;

    return (
      <AssetBlock file={this.props.hero.heroAsset && this.props.hero.heroAsset.file}>
        <div>
          <HeroTypography size="h1">{hero.headline}</HeroTypography>
        </div>
      </AssetBlock>
    );
  }
}


AudioHero.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(AudioHero);

export const query = graphql`
  fragment AudioHero on ContentfulLayoutPostTypeAudio {
    headline
    heroAsset {
      title
      file {
        url
        contentType
      }
    }
  }
`;

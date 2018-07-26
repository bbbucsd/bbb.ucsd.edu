import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AssetBlock from './AssetBlock';
import HeroTypography from './HeroTypography';
import Button from './Button';

const styles = theme => ({

});

class StandardVideoHero extends Component {
  cta() {
    return (
      <div className={this.props.classes.cta}>
        <Button to={this.props.hero.ctaLink} text={this.props.hero.ctaLabel}></Button>
      </div>
    )
  }

  render() {
    const { classes, hero } = this.props;

    return (
      <AssetBlock file={this.props.hero.heroAsset && this.props.hero.heroAsset.file}>
        <div>
          <HeroTypography size="h1">{hero.headline}</HeroTypography>
          <HeroTypography size="h2">{hero.subheadline}</HeroTypography>
          {this.cta()}
        </div>
      </AssetBlock>
    );
  }
}


StandardVideoHero.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(StandardVideoHero);

//export const query = graphql`
  //fragment StandardVideoHero on ContentfulLayoutStandardVideoHero {
    //headline
    //videoUrl
    //heroAsset {
      //title
      //file {
        //url
        //contentType
      //}
    //}
  //}
//`;

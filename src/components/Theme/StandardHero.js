import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AssetBlock from './AssetBlock';
import {Link, RichText, Date} from 'prismic-reactjs';
import HeroTypography from './HeroTypography';
import Button from './Button';

const styles = theme => ({

});

class StandardHero extends Component {

  cta(data) {
    return (
      <div className={this.props.classes.cta}>
        <Button to={data.cta_link.url} text={data.cta_label}></Button>
      </div>
    )
  }

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <AssetBlock file={data.hero_asset && data.hero_asset.url}>
        <div>
          <HeroTypography size="h1">{data.headline.text}</HeroTypography>
          <HeroTypography size="h2">{data.subheadline.text}</HeroTypography>
          {this.cta(data)}
        </div>
      </AssetBlock>
    );
  }
}


StandardHero.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(StandardHero);

export const query = graphql`
  fragment StandardHero on PrismicPageBodyStandardHero {
    primary {
      headline {
        text
      }
      subheadline {
        text
      }
      hero_asset {
        url
      }
      cta_label
      cta_link {
        url
      }
    }
  }
`;

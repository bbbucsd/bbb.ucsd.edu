import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';

// Elements
import HeroWrapper from './Elements/HeroWrapper';
import HeroTypography from './Elements/HeroTypography';
import Button from './Elements/Button/index';

const styles = theme => ({
  cta: {
    marginTop: '30px',
  }
});

class StandardHero extends Component {

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <HeroWrapper imageSrc={data.hero_asset.url}>

        <HeroTypography size="h1">{data.headline.text}</HeroTypography>
        <HeroTypography size="h2">{data.subheadline.text}</HeroTypography>

        <div className={classes.cta}>
          <Button to={data.cta_link.url} text={data.cta_label}></Button>
        </div>

      </HeroWrapper>
    );
  }
}


StandardHero.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(StandardHero);

// Normally PrismicPageBodyStandardhero would be PrismicPageBodyStandardHero (capital Hero) but the original
// api name was set to "lower case hero"
export const query = graphql`
  fragment StandardHero on PrismicPageBodyStandardhero {
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

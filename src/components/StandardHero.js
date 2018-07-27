import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';

// Elements
import HeroTypography from './Elements/HeroTypography';
import Button from './Elements/Button';

const styles = theme => ({
  scope: {
    backgroundColor: global.black,
    textAlign: 'center',
    color: global.white,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    minHeight: '80vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',

  },
  reducedHeight: {
    minHeight: '50vh !important',
  },
  scopeVerbiage: {
    width: '100%',
    display: 'flex',
    zIndex: '1',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      top: '100px',
    }
  },
  backgroundVideo: {
    left: '0',
    right: '0',
    top: '0',
    opacity: '0.2',
    objectFit: 'cover',
    width: '100%',
    position: 'absolute',
    zIndex: '0',
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
});

class StandardHero extends Component {

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <div style={{ backgroundImage: 'url("' + data.hero_asset.url + '")' }} className={`scope ${classes.scope} ${this.props.reducedHeight ? classes.reducedheight : ''}`}>
        <div>
          <HeroTypography size="h1">{data.headline.text}</HeroTypography>
          <HeroTypography size="h2">{data.subheadline.text}</HeroTypography>

          <div className={this.props.classes.cta}>
            <Button to={data.cta_link.url} text={data.cta_label}></Button>
          </div>
        </div>
      </div>
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

import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import HeroTypography from './Elements/HeroTypography';
import Button from './Elements/Button';

const styles = theme => ({
  scope: {
    textAlign: 'center',
    color: global.white,
    backgroundColor: global.brandPrimary,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    minHeight: '50vh',
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
});

class SimpleHero extends Component {

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <div>
        <div className={classes.scope} style={{ height: this.props.height }}>
          <div className={`scope-verbiage ${classes.scopeVerbiage}`}>
            <HeroTypography size="h1">{data.headline.text}</HeroTypography>
            <HeroTypography size="h2">{data.subheadline.text}</HeroTypography>
          </div>
        </div>
      </div>
    );
  }
}


SimpleHero.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(SimpleHero);

export const query = graphql`
  fragment SimpleHero on PrismicPageBodySimpleHero {
    primary {
      headline {
        text
      }
      subheadline {
        text
      }
    }
  }
`;
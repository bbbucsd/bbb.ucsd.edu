import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';

// Elements
import HeroTypography from '../../Elements/HeroTypography/index';
import Button from '../../Elements/Button/index';
import Video from '../../Elements/Video/index'
import HeroWrapper from '../../Elements/HeroWrapper/index'

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
  cta: {
    marginTop: '30px',
  }
});



class Index extends Component {

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <HeroWrapper>
        <Video src={data.video_asset.url} />

        <div className={`scope-verbiage ${classes.scopeVerbiage}`}>
          <HeroTypography h1>{data.headline.text}</HeroTypography>
          <HeroTypography h2>{data.subheadline.text}</HeroTypography>

          <div className={classes.cta}>
            <Button to={data.cta_link.url} text={data.cta_label}></Button>
          </div>
        </div>
      </HeroWrapper>
    );
  }
}


Index.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(Index);

export const query = graphql`
  fragment StandardVideoHero on PrismicPageBodyStandardVideoHero {
    primary {
      headline {
        text
      }
      subheadline {
        text
      }
      video_asset {
        url
      }
      cta_label
      cta_link {
        url
      }
    }
  }
`;

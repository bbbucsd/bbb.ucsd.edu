import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StandardHero from '../components/Theme/StandardHero';
import SimpleHero from '../components/Theme/SimpleHero';
import HighlightHero from '../components/Page/HighlightHero';
import ContentBlock from '../components/Theme/ContentBlock';
import DoubleBlock from '../components/Theme/DoubleBlock';
import LogoBlock from '../components/Page/LogoBlock';
//import LogoBlockInline from './LogoBlockInline';
//import SingleImageSection from './SingleImageSection';
//import SEO from './SEO';

const styles = theme => ({

});

class Page extends Component {

  renderSlice(slice, index) {
    switch (slice.__typename) {
      case 'PrismicPageBodyStandardHero':
        return <StandardHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodySimpleHero':
        return <SimpleHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyHighlightHero':
        return <HighlightHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleBlock':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyLogoBlock':
        return <LogoBlock key={`slice_${index}`} slice={slice} />
      //case 'ContentfulLayoutContentBlock':
        //return <ContentBlock key={`slice_${index}`} data={section} />
      //case 'ContentfulLayoutSingleImageSection':
        //return <SingleImageSection key={`slice_${index}`} data={section} />
      //case 'ContentfulLayoutLogoBlockInline':
        //return <LogoBlockInline key={`slice_${index}`} data={section} />
    };
  }

  render() {
    const { classes } = this.props;
    const page = this.props.data.prismicPage.data
    const { body } = page

        //<SEO seo={seo} />
    return (
      <div>
        <Header />
        {(body||[]).map((slice, i) => this.renderSlice(slice, i) )}
        <Footer />
      </div>
    );
  }
}


Page.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth())(Page);

export const pageQuery = graphql`
  query PageQuery($path: String!) {
    prismicPage(data: { path: { eq: $path }}) {
      data {
        path
        title {
          text
        }
        body {
          ...StandardHero
          ...SimpleHero
          ...HighlightHero
          ...DoubleBlock
          ...LogoBlock
        }
      }
    }
  }
`

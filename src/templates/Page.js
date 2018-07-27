import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/_Header';
import Footer from '../components/_Footer';
import StandardHero from '../components/StandardHero';
import StandardVideoHero from '../components/StandardVideoHero';
// import HighlightHero from '../components/HighlightHero';
//import ContentBlock from '../components/ContentBlock';
import DoubleBlock from '../components/DoubleBlock';
import DoubleBlockVideo from '../components/DoubleBlockVideo';

//import LogoBlock from '../components/LogoBlock';
//import LogoBlockInline from '../components/LogoBlockInline';
//import SingleImageSection from '../components/SingleImageSection';
//import Meta from '../components/_Meta';

const styles = theme => ({

});

class Page extends Component {

  renderSlice(slice, index) {
    switch (slice.__typename) {
      case 'PrismicPageBodyStandardhero':
        return <StandardHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyStandardVideoHero':
        return <StandardVideoHero key={`slice_${index}`} slice={slice} />
      //case 'PrismicPageBodyHighlightHero':
        //return <HighlightHero key={`slice_${index}`} slice={slice} />
      //case 'ContentfulLayoutSimpleHero':
        //return <SimpleHero hero={hero} />
      case 'PrismicPageBodyDoubleBlock':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleBlockVideo':
        return <DoubleBlockVideo key={`slice_${index}`} slice={slice} />
      //case 'ContentfulLayoutLogoBlock':
        //return <LogoBlock key={`slice_${index}`} data={section} />
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

        //<Meta seo={seo} />
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
        body {
          ...StandardHero
          ...StandardVideoHero
          ...DoubleBlock
          ...DoubleBlockVideo
        }
      }
    }
  }
`

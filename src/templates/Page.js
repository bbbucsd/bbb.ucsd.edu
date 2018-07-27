import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';

import Header from '../components/Page/Header/index';
import Footer from '../components/Page/Footer/Footer';
import Meta from '../components/Page/Meta/Meta';

import StandardHero from '../components/StandardHero';
import StandardVideoHero from '../components/Page/Slices/StandardVideoHero';
import SimpleHero from '../components/SimpleHero';
import HighlightHero from '../components/HighlightHero';
import DoubleBlock from '../components/DoubleBlock';
import DoubleBlockVideo from '../components/DoubleBlockVideo';
import ContentBlock from '../components/ContentBlock';
import LogoBlock from '../components/LogoBlock';
import StatementBlock from '../components/StatementBlock';

const styles = theme => ({

});

class Page extends Component {

  renderSlice(slice, index) {
    switch (slice.__typename) {
      case 'PrismicPageBodyStandardhero':
        return <StandardHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyStandardVideoHero':
        return <StandardVideoHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleBlock':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleBlockVideo':
        return <DoubleBlockVideo key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodySimpleHero':
        return <SimpleHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyHighlightHero':
        return <HighlightHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleBlock':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyLogoBlock':
        return <LogoBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyContentBlock':
        return <ContentBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyStatementBlock':
        return <StatementBlock key={`slice_${index}`} slice={slice} />
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
          ...SimpleHero
          ...HighlightHero
          ...DoubleBlock
          ...LogoBlock
          ...ContentBlock
          ...StatementBlock
        }
      }
    }
  }
`

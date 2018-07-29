import React, { Component } from 'react';

import Meta from '../components/Meta/index';
import '../components/Page/Meta';
import PageConfig from '../config/Page';

import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';

import StandardHero from '../components/Page/Slices/StandardHero/index';
import SimpleHero from '../components/Page/Slices/SimpleHero/index';
import HighlightHero from '../components/Page/Slices/HighlightHero/index';
import DoubleBlock from '../components/Page/Slices/DoubleBlock';
import ContentBlock from '../components/Page/Slices/ContentBlock/index';
import LogoBlock from '../components/Page/Slices/LogoBlock/index';
import StatementBlock from '../components/Page/Slices/StatementBlock/index';

class Page extends Component {

  renderSlice(slice, index) {
    switch (slice.__typename) {
      case 'PrismicPageBodyStandardhero':
        return <StandardHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleBlock':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
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
    const page = this.props.data.prismicPage.data;
    const { body, body2 } = page
    const pageConfig = this.props.data.prismicPageConfig.data;

    return (
      <div>
        <Meta defaultMeta={pageConfig} meta={body2} />
        <Header />
        {(body||[]).map((slice, i) => this.renderSlice(slice, i) )}
        <Footer />
      </div>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query PageQuery($path: String!) {
    prismicPageConfig(uid: { eq: "page_config" }) {
      ...PageConfig
    }
    prismicPage(data: { path: { eq: $path }}) {
      ...Meta
      data {
        path
        body {
          ...StandardHero
          ...DoubleBlock
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

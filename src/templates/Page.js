import React, { Component } from 'react';

// Meta
import MetaFrontMatter from 'components/Meta/FrontMatter'
import MetaOpenGraph from 'components/Meta/OpenGraph'

// Elements
import Header from 'components/Page/Header';
import Footer from 'components/Page/Footer';
import StandardHero from 'components/Page/Slices/StandardHero/index';
import SimpleHero from 'components/Page/Slices/SimpleHero/index';
import HighlightHero from 'components/Page/Slices/HighlightHero/index';
import DoubleBlock from 'components/Page/Slices/DoubleBlock';
import ContentBlock from 'components/Page/Slices/ContentBlock/index';
import LogoBlock from 'components/Page/Slices/LogoBlock/index';
import StatementBlock from 'components/Page/Slices/StatementBlock/index';

class Page extends Component {

  renderMetaSlice(metaSlice, index) {
    console.log(metaSlice.__typename)
    switch (metaSlice.__typename) {
      case 'PrismicPageBody2OpenGraph':
        console.log('test')
        return <MetaOpenGraph key={`slice_${index}`} slice={metaSlice} />
    };
  }

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
    const page = this.props.data.prismicPage.data
    const { body, body2 } = page


    return (
      <div>
        <MetaFrontMatter data={page} />
        {(body2||[]).map((slice, i) => this.renderMetaSlice(slice, i) )}

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
    prismicPage(data: { path: { eq: $path }}) {
      data {
        path
        ...MetaFrontMatterFieldsFields
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
        body2 {
          ...MetaOpenGraphFields
        }
      }
    }
  }
`

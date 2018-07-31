import React, { Component } from 'react';
import Meta from 'components/Page/Meta';
import Header from 'components/Page/Header';
import Footer from 'components/Page/Footer';
import StandardHero from 'components/Page/Slices/StandardHero';
import HighlightHero from 'components/Page/Slices/HighlightHero';
import DoubleBlock from 'components/Page/Slices/DoubleBlock';
import LogoBlock from 'components/Page/Slices/LogoBlock';
import ContentBlock from 'components/Page/Slices/ContentBlock';
import StatementBlock from 'components/Page/Slices/StatementBlock';
import FeatureBlock from 'components/Page/Slices/FeatureBlock';
import TestimonialBlock from 'components/Page/Slices/TestimonialBlock';
import DoubleTestimonialBlock from 'components/Page/Slices/DoubleTestimonialBlock';

class Page extends Component {

  renderSlice(slice, index) {
    switch (slice.__typename) {
      case 'PrismicPageBodyStandardhero':
        return <StandardHero key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleBlock':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
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
      case 'PrismicPageBodyFeatureBlock':
        return <FeatureBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyTestimonialBlock':
        return <TestimonialBlock key={`slice_${index}`} slice={slice} />
      case 'PrismicPageBodyDoubleTestimonialBlock':
        return <DoubleTestimonialBlock key={`slice_${index}`} slice={slice} />
    };
  }

  render() {
    const page = this.props.data.prismicPage;
    const data = this.props.data.prismicPage.data;
    const { body } = data;

    return (
      <div>
        <Meta page={page} />
        <Header />
        {( body || [] ).map((slice, i) => this.renderSlice(slice, i) )}
        <Footer />
      </div>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query PageQuery($path: String!) {
    prismicPage(data: { path: { eq: $path }}) {
      tags
      first_publication_date
      last_publication_date
      ...Meta
      data {
        path
        body {
          ...StandardHero
          ...DoubleBlock
          ...HighlightHero
          ...LogoBlock
          ...ContentBlock
          ...StatementBlock
          ...FeatureBlock
          ...TestimonialBlock
          ...DoubleTestimonialBlock
        }
      }
    }
  }
`

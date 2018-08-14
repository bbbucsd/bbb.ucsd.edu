import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Page extends Component {
  render() {
    const { document } = this.props;
    return (
      <div>
        <Header display={document.data.header} />
        <Slices document={document} />
        <Footer display={document.data.footer} />
      </div>
    );
  }
}

export default connectPreview('page')(Page);

export const pageQuery = graphql`
  query PageQuery($uid: String!) {
    page(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        header
        footer
        body {
          ...StandardHero
          ...SimpleHero
          ...DoubleBlock
          ...HighlightHero
          ...LogoBlock
          ...LogoBlockInline
          ...ContentBlock
          ...StatementBlock
          ...FeatureBlock
          ...SingleImageBlock
          ...FormBlock
#          ...TestimonialBlock
#          ...DoubleTestimonialBlock
        }
        body2 {
          ...OpenGraph
          ...Twitter
          ...SchemaWebpage
        }
      }
    }
  }
`



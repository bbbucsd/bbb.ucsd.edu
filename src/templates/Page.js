import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slices document={this.props.document} />
        <Footer />
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
        body {
          ...StandardHero
          ...DoubleBlock
          ...HighlightHero
          ...LogoBlock
          ...LogoBlockInline
          ...ContentBlock
          ...StatementBlock
          ...FeatureBlock
          ...SingleImageBlock
          ...Form
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



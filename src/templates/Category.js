import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Category extends Component {

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

export default connectPreview('category')(Category);

export const categoryQuery = graphql`
  query CategoryQuery($uid: String!) {
    category(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        body {
          ...ContentBlock
          ...FeatureBlock
          ...LogoBlock
          ...LogoBlockInline
          ...SingleImageBlock
          ...StandardHero
          ...DoubleBlock
          ...StatementBlock
        }
        body1 {
          ...FrontMatter
          ...OpenGraph
          ...Twitter
          ...SchemaItemList
          ...SchemaWebpage
        }
      }
    }
  }
`



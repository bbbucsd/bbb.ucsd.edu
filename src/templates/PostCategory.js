import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class PostCategory extends Component {

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

export default connectPreview('postCategory')(PostCategory);

export const postCategoryQuery = graphql`
  query PostCategoryQuery($uid: String!) {
    postCategory(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        body {
          ...ContentBlock
          ...LogoBlock
          ...LogoBlockInline
          ...SingleImageBlock
          ...StandardHero
          ...DoubleBlock
        }
        body1 {
          ...FrontMatter
          ...OpenGraph
          ...Twitter
          ...SchemaWebpage
        }
      }
    }
  }
`



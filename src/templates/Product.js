import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Product extends Component {

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

export default connectPreview('product')(Product);

export const productQuery = graphql`
  query ProductQuery($uid: String!) {
    product(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        body {
          ...ContentBlock
          ...FeatureBlock
          ...SingleImageBlock
          ...StandardHero
          ...DoubleBlock
          ...StatementBlock
        }
        body1 {
          ...OpenGraph
          ...Twitter
          ...SchemaProduct
          ...SchemaWebpage
        }
      }
    }
  }
`



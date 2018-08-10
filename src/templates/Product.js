import React, { Component } from 'react';
import PrismicHelper from '../utils/prismicHelper';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';


class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doc: this.props.data.product
    };
  }

  componentWillMount() {
    PrismicHelper.previewData('my.product.uid', this.props.data.product.uid, (data) => {
      this.setState({ doc: data });
    })
  }

  render() {
    const product = this.state.doc;

    return (
      <div>
        <Header />
        <Slices document={product} />
        <Footer />
      </div>
    );
  }
}

export default Product;

export const productQuery = graphql`
  query ProductQuery($uid: String!) {
    product(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        body {
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



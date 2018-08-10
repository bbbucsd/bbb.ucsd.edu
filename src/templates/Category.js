import React, { Component } from 'react';
import PrismicHelper from '../utils/prismicHelper';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';


class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doc: this.props.data.category
    };
  }

  componentWillMount() {
    PrismicHelper.previewData('my.category.uid', this.props.data.category.uid, (data) => {
      this.setState({ doc: data });
    })
  }

  render() {
    const category = this.state.doc;

    return (
      <div>
        <Header />
        <Slices document={category} />
        <Footer />
      </div>
    );
  }
}

export default Category;

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
          ...OpenGraph
          ...Twitter
          ...SchemaItemList
        }
      }
    }
  }
`



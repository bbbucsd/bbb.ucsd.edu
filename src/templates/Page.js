import React, { Component } from 'react';
import PrismicHelper from '../utils/prismicHelper';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';


class Page extends Component {

  constructor(props) {
    super(props);
    let data = props.data.prismicPage ? props.data.prismicPage.data : {};
    let tags = props.data.prismicPage ? props.data.prismicPage.tags : {};

    this.state = {
      doc: props.data.page
    };
  }

  componentWillMount() {
    PrismicHelper.previewData('my.page.uid', this.props.data.page.uid, (data) => {
      this.setState({ doc: data });
    })
  }

  render() {
    const page = this.state.doc;
    const tags = this.state.tags;

    return (
      <div>
        <Header />
        <Slices document={page} />
        <Footer />
      </div>
    );
  }
}

export default Page;

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



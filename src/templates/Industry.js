import React, { Component } from 'react';
import PrismicHelper from '../utils/prismicHelper';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';


class Industry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doc: this.props.data.industry
    };
  }

  componentWillMount() {
    PrismicHelper.previewData('my.industry.uid', this.props.data.industry.uid, (data) => {
      this.setState({ doc: data });
    })
  }

  render() {
    const industry = this.state.doc;

    return (
      <div>
        <Header />
        <Slices document={industry} />
        <Footer />
      </div>
    );
  }
}

export default Industry;

export const industryQuery = graphql`
  query IndustryQuery($uid: String!) {
    industry(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        body {
          ...StandardHero
          ...DoubleBlock
          ...LogoBlockInline
          ...ContentBlock
          ...StatementBlock
          ...SingleImageBlock
        }
        body1 {
          ...OpenGraph
          ...Twitter
          ...SchemaWebpage
        }
      }
    }
  }
`



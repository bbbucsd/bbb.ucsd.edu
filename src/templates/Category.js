import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Header from 'components/Theme/Header';
import Features from 'components/Features';
import Slices from 'components/Slices';
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Category extends Component {

  render() {
    const { document } = this.props;
    return (
      <Layout>
        <Header document={document} />
        <Features document={document} />
        <Slices document={document} />
        <Footer display={document.data.footer} />
      </Layout>
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
          ...StandardHero
          ...SimpleHero
          ...HighlightContentBlock
          ...ContentBlock
          ...LogoBlock
          ...LogoBlockInline
          ...SingleImageBlock
          ...FeatureBlock
          ...StatementBlock
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



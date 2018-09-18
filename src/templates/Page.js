import React, { Component } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Theme/Header';
import Features from 'components/Features';
import Slices from 'components/Slices';
import Meta from 'components/Meta';
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';
import { graphql } from 'gatsby';


class Page extends Component {
  render() {
    const { location, document } = this.props;
    return (
      <Layout {...this.props}>
        <Header document={document} />
        <Meta type="page" location={location} document={document} />
        <Features document={document} />
        <Slices document={document} />
        <Footer display={document.data.footer} />
      </Layout>
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
      ...Features
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
          ...HighlightContentBlock
          ...ContentBlock
          ...StatementBlock
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

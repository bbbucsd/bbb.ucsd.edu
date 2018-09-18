import React, { Component } from 'react';
import Layout from 'components/Layout';
import LandingPages from 'components/LandingPages';
import Meta from 'components/Meta';
import connectPreview from 'lib/connectPreview';
import { graphql } from 'gatsby';


class LandingPage extends Component {
  render() {
    const { location, document } = this.props;
    return (
      <Layout {...this.props}>
        <Meta type="page" location={location} document={document} />
        <LandingPages document={document} />
      </Layout>
    );
  }
}

export default connectPreview('landingPage')(LandingPage);

export const pageQuery = graphql`
  query LandingPageQuery($uid: String!) {
    landingPage(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        body {
          ...SimplePage
        }
        body1 {
          ...FrontMatter
          ...OpenGraph
          ...Twitter
        }
      }
    }
  }
`

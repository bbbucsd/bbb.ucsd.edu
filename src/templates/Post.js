import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Header from 'components/Theme/Header';
import Features from 'components/Features';
import Meta from 'components/Meta';
import Slices from 'components/Slices';
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';
import { connect } from 'airlytics';
import _ from 'lodash';

class Post extends Component {

  static getDerivedStateFromProps(props, currentState) {
    let state = currentState || {};
    let categoryName, subcategoryName;
    const { uid, data } = props.document;
    const { category, subcategory } = data;
    if (props.lastAction) {
      if (typeof window === "undefined") { return state; }
      if (props.lastAction.type === "ENGAGED_VISITOR" && state.type !== "ENGAGED_VISITOR") {
        if (category && category.document && category.document.length) {
          categoryName = category.document[0].data.name.text;
        }
        if (categoryName) {
          props.actions.incrementLeaderboardScore("category", _.snakeCase(categoryName), uid);
        }
        if (subcategory && subcategory.document && subcategory.document.length) {
          subcategoryName = subcategory.document[0].data.name.text;
        }
        if (categoryName && subcategoryName) {
          props.actions.incrementSubleaderboardScore("category", _.snakeCase(categoryName), _.snakeCase(subcategoryName), uid);
        }
      }
      state.type = props.lastAction.type;
    }
    return state;
  }

  render() {
    const { location, document } = this.props;
    return (
      <Layout {...this.props}>
        <Header document={document} />
        <Meta type="post" location={location} document={document} />
        <Features document={document} />
        <Slices document={document} />
        <Footer />
      </Layout>
    );
  }
}

export default connect()(connectPreview('post')(Post));

export const postQuery = graphql`
  query PostQuery($uid: String!) {
    post(uid: { eq: $uid }) {
      uid
      tags
      first_publication_date
      last_publication_date
      ...Features
      data {
        featured_image {
          url
        }
        category {
          document {
            data {
              name {
                text
              }
            }
          }
        }
        subcategory {
          document {
            data {
              name {
                text
              }
            }
          }
        }
        body {
          ...StandardHero
          ...SimpleHero
          ...BonusBox
          ...ContentBlock
          ...StatementBlock
          ...HighlightContentBlock
          ...SingleFeatureBlock
          ...SimpleSingleFeatureBlock
          ...DocumentsRow
          ...SocialRow
          ...Disqus
        }
        body1 {
          ...FrontMatter
          ...OpenGraph
          ...Twitter
          ...SchemaArticle
          ...SchemaWebpage
        }
      }
    }
  }
`



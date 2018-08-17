import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices';
import Footer from 'components/Theme/Footer';
import Hero from 'components/Theme/Hero';
import connectPreview from 'lib/connectPreview';

class Post extends Component {

  constructor(props) {
    super(props);
  }

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

export default connectPreview('post')(Post);

export const postQuery = graphql`
  query PostQuery($uid: String!) {
    post(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        featured_image {
          url
        }
        body {
          ...SimpleHero
          ...ContentBlock
          ...HighlightContentBlock
        }
        body1 {
          ...FrontMatter
          ...OpenGraph
          ...Twitter
          ...SchemaArticle
          ...SchemaPerson
          ...SchemaWebpage
        }
      }
    }
  }
`



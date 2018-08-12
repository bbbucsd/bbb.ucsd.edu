import React, { Component } from 'react';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Post extends Component {

  constructor(props) {
    super(props);
    //let data = props.data.prismicPage ? props.data.prismicPage.data : {};
    //let tags = props.data.prismicPage ? props.data.prismicPage.tags : {};

    //this.state = {
      //doc: props.data.page
    //};
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
        body1 {
          ...ContentBlock
        }
        body {
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



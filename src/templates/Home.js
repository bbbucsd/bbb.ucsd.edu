import React, { Component } from 'react';
import PrismicHelper from '../utils/prismicHelper';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices';
import Footer from 'components/Theme/Footer';
import connectPreview from 'lib/connectPreview';

class Home extends Component {

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

export default connectPreview('home')(Home);

export const homeQuery = graphql`
  query HomeQuery {
    home {
      uid
      first_publication_date
      last_publication_date
      data {
        body {
          ...StandardHero
          ...DoubleBlock
          ...LogoBlock
          ...StatementBlock
        }
        body1 {
          ...OpenGraph
          ...Twitter
          ...SchemaWebsite
        }
      }
    }
  }
`



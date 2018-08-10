import React, { Component } from 'react';
import PrismicHelper from '../utils/prismicHelper';
import Header from 'components/Theme/Header';
import Slices from 'components/Slices'
import Footer from 'components/Theme/Footer';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doc: this.props.data.homePage
    };
  }

  componentWillMount() {
    PrismicHelper.previewData('my.homePage.uid', this.props.data.homePage.uid, (data) => {
      this.setState({ doc: data });
    })
  }

  render() {
    const home = this.state.doc;

    return (
      <div>
        <Header />
        <Slices document={home} />
        <Footer />
      </div>
    );
  }
}

export default Home;

export const homeQuery = graphql`
  query HomeQuery {
    homePage {
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
          ...SchemaOrganization
          ...SchemaWebsite
        }  
      }
    }
  }
`



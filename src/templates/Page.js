import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import PrismicConfig from '../../prismic-config';
import Meta from 'components/Page/Meta';
import Header from 'components/Page/Header';
import Footer from 'components/Page/Footer';
import StandardHero from 'components/Page/Slices/StandardHero';
import HighlightHero from 'components/Page/Slices/HighlightHero';
import DoubleBlock from 'components/Page/Slices/DoubleBlock';
import LogoBlock from 'components/Page/Slices/LogoBlock';
import ContentBlock from 'components/Page/Slices/ContentBlock';
import StatementBlock from 'components/Page/Slices/StatementBlock';
import FeatureBlock from 'components/Page/Slices/FeatureBlock';

class Page extends Component {

  constructor(props) {
    super(props);

    // TODO: find out why a prismicPage would return null?
    let data = props.data.prismicPage ? props.data.prismicPage.data : {}
    this.state = { doc: data };
  }

  componentWillMount() {
    // Check for a preview cookie
    const previewCookie = Cookies.get(Prismic.previewCookie);
    // Retrieve preview content if cookie is set
    if (previewCookie !== undefined) {
      Prismic.api(PrismicConfig.apiEndpoint).then(api => {
        api.query(
          Prismic.Predicates.at('my.page.uid', this.props.data.prismicPage.uid),
          { ref : previewCookie }
        ).then((response) => {
          // response is the response object, response.results holds the documents
          var document = response.results[0].data
          if (document) {
            this.setState({ doc: document });
          }
        });
      });
    }
  }

  renderSlice(slice, index) {
    switch (slice.slice_type) {
      case 'standardhero':
        return <StandardHero key={`slice_${index}`} slice={slice} />
      case 'double_block':
        return <DoubleBlock key={`slice_${index}`} slice={slice} />
      case 'highlight_hero':
        return <HighlightHero key={`slice_${index}`} slice={slice} />
      case 'logo_block':
        return <LogoBlock key={`slice_${index}`} slice={slice} />
      case 'content_block':
        return <ContentBlock key={`slice_${index}`} slice={slice} />
      case 'statement_block':
        return <StatementBlock key={`slice_${index}`} slice={slice} />
      case 'feature_block':
        return <FeatureBlock key={`slice_${index}`} slice={slice} />
    };
  }

  render() {
    const page = this.state.doc;
    return (
      <div>
        <Meta page={page} />
        <Header display={page.header} />
        {( page.body || [] ).map((slice, i) => this.renderSlice(slice, i) )}
        <Footer display={page.footer} />
      </div>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query PageQuery($path: String!) {
    prismicPage(data: { path: { eq: $path }}) {
      uid
      tags
      first_publication_date
      last_publication_date
      ...Meta
      data {
        path
        header
        footer
        body {
          ...StandardHero
          ...DoubleBlock
          ...HighlightHero
          ...LogoBlock
          ...ContentBlock
          ...StatementBlock
          ...FeatureBlock
        }
      }
    }
    site {
      siteMetadata {
        title
        prismicEndpoint
      }
    }
  }
`

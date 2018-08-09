import React, { Component } from 'react';
import Helmet from 'react-helmet'
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import PrismicConfig from 'utils/prismicHelper';
import Config from '../config';
import Meta from 'components/Page/Meta';
import Features from 'components/Page/Features';
import Header from 'components/Page/Header';
import Footer from 'components/Page/Footer';
import Slices from 'components/Page/Slices';
import '../components/Theme/Globals';
import '../components/Theme/Normalize';

class Page extends Component {

  constructor(props) {
    super(props);
    let data = props.data.prismicPage ? props.data.prismicPage.data : {};
    let tags = props.data.prismicPage ? props.data.prismicPage.tags : {};

    // Set defaults for meta data (OpenGraph, Twitter, etc)
    Config.set(Object.assign({}, {
      currentUrl: this.getCurrentUrl(props.data.site.siteMetadata.siteUrl, props.location)
    }, props.data.site.siteMetadata));

    // # Set Data as state
    // TODO: find out why a prismicPage would return null?
    this.state = { tags, doc: data };
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

  getCurrentUrl(siteUrl, location) {
    let { pathname } = location;
    let url = siteUrl

    if (pathname !== "/") {
      url = url + pathname;
    }

    return url;
  }

  render() {
    const page = this.state.doc;
    const tags = this.state.tags;

    return (
      <div>
        <Helmet>
          <script>{`window.prismic = { endpoint: '${PrismicConfig.apiEndpoint}' }`}</script>
          <script type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js"></script>
        </Helmet>

        <Meta tags={tags} page={page} />

        <Features page={page} />
        <Header display={page.header} />
        <Slices page={page} />
        <Footer display={page.footer} />
      </div>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query PageQuery($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      tags
      first_publication_date
      last_publication_date
      ...Meta
      ...Features
      ...Slices
      data {
        header
        footer
      }
    }
    ...Site
  }
`

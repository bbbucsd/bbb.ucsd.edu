import React, { Component } from 'react';
import Helmet from 'react-helmet'
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import PrismicConfig from 'utils/prismicHelper';
import Config from '../config';
import Meta from 'components/Page/Meta';
import Header from 'components/Page/Header';
import Footer from 'components/Page/Footer';
import StandardHero from 'components/Page/Slices/StandardHero';
import HighlightHero from 'components/Page/Slices/HighlightHero';
import DoubleBlock from 'components/Page/Slices/DoubleBlock';
import LogoBlock from 'components/Page/Slices/LogoBlock';
import LogoBlockInline from 'components/Page/Slices/LogoBlockInline';
import ContentBlock from 'components/Page/Slices/ContentBlock';
import StatementBlock from 'components/Page/Slices/StatementBlock';
import HorizontalFormBlock from 'components/Page/Slices/HorizontalFormBlock';
import FeatureBlock from 'components/Page/Slices/FeatureBlock';
import SingleImageBlock from 'components/Page/Slices/SingleImageBlock';
import '../components/Theme/Globals';
import '../components/Theme/Default.scss'

class Page extends Component {

  constructor(props) {
    super(props);

    // Set defaults for meta data (OpenGraph, Twitter, etc)
    Config.set(Object.assign({}, {
      currentUrl: this.getCurrentUrl(props.data.site.siteMetadata.siteUrl, props.location)
    }, props.data.site.siteMetadata));

    // # Set Data as state
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

  getCurrentUrl(siteUrl, location) {
    let { pathname } = location;
    let url = siteUrl

    if (pathname !== "/") {
      url = url + pathname;
    }

    return url;
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
      case 'logo_block__inline_':
        return <LogoBlockInline key={`slice_${index}`} slice={slice} />
      case 'content_block':
        return <ContentBlock key={`slice_${index}`} slice={slice} />
      case 'statement_block':
        return <StatementBlock key={`slice_${index}`} slice={slice} />
      case 'horizontal_form_block':
        return <HorizontalFormBlock key={`slice_${index}`} slice={slice} />
      case 'feature_block':
        return <FeatureBlock key={`slice_${index}`} slice={slice} />
      case 'single_image_block':
        return <SingleImageBlock key={`slice_${index}`} slice={slice} />
    };
  }

  render() {
    const page = this.state.doc;

    return (
      <div>
        <Helmet>
          <script>{`window.prismic = { endpoint: '${PrismicConfig.apiEndpoint}' }`}</script>
          <script type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js"></script>
        </Helmet>

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
  query PageQuery($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
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
          ...LogoBlockInline
          ...ContentBlock
          ...StatementBlock
          ...FeatureBlock
          ...SingleImageBlock
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        siteName
        hostname
        locale
        metaDescription
        openGraph {
          fbAppId
          image
          imageDescription
          imageHeight
          imageWidth
        }
        twitter {
          image
          site
          creator
        }
        schemaOrganization {
          name
          url
          logo
          street
          city
          state
          zip
          country
          email
          description
          foundingDate
          sameAs
          contacts {
            phone
            type
            areaServed
          }
        }
        schemaPerson {
          name
          url
          image
          sameAs
        }
      }
    }
  }
`

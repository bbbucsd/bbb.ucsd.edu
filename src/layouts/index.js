import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import PrismicConfig from 'utils/prismicHelper';
import Helmet from 'react-helmet'
import Modal from '../components/Theme/Modal'
import Config from '../config'
import { ThemeProvider } from 'styled-components'
import theme, { fonts } from 'components/Theme/Globals'

import 'components/Theme/Fonts.css' // https://github.com/styled-components/styled-components/issues/1593
import 'components/Theme/Normalize'
import '../components/Theme/Globals';



class Layout extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    isModal: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    // Set defaults for meta data (OpenGraph, Twitter, etc)
    Config.set(Object.assign({}, {
      currentUrl: this.getCurrentUrl(props.data.site.siteMetadata.siteUrl, props.location)
    }, props.data.site.siteMetadata));
  }

  getCurrentUrl(siteUrl, location) {
    let { pathname } = location;
    let url = siteUrl

    if (pathname !== "/") {
      url = url + pathname;
    }

    return url;
  }

  isInModal() {
    return (this.props.location.state && this.props.location.isInModal);
  }


  render() {
    const { location } = this.props;
    const isModal = this.isInModal()
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Helmet>
            <script>{`window.prismic = { endpoint: '${PrismicConfig.apiEndpoint}' }`}</script>
            <script type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js"></script>
          </Helmet>

          <div>
            {isModal ? this.props.children({ ...this.props, location: { pathname: location.state.page } }) : this.props.children()}
          </div>

          <div>
            {isModal && (
              <Modal open={true} location={location}>
                {this.props.children}
              </Modal>
            )}
          </div>
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default Layout

export const siteQuery = graphql`
  query RootQueryType {
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

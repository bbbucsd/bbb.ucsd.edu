import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.scss'

// Styles
import '../components/Theme/Globals';
import Config from '../config.js';

const theme = createMuiTheme({})

const Layout = ({ location, children, data }) => {
  Config.set(Object.assign({}, {
    currentUrl: location
  }, data.site.siteMetadata));
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/brands.css" integrity="sha384-KtmfosZaF4BaDBojD9RXBSrq5pNEO79xGiggBxf8tsX+w2dBRpVW5o0BPto2Rb2F" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/fontawesome.css" integrity="sha384-8WwquHbb2jqa7gKWSoAwbJBV2Q+/rQRss9UXL5wlvXOZfSodONmVnifo/+5xJIWX" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.typekit.net/pqq2exl.css" />
        </Helmet>

        { children() }
      </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        siteUrl
        siteName
        hostname
        locale
        metaDescription
        openGraph {
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

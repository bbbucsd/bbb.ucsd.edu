import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Config from '../../config.js';
import PrismicConfig from '../../prismic-config'
import '../components/Theme/Globals';
import './index.scss'


const theme = createMuiTheme({})

const Layout = ({ children, data }) => {
  if (window !== 'undefined') {
    window.prismic = { endpoint: PrismicConfig.apiEndpoint };
  }

  Config.set(data.site.siteMetadata);

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/brands.css" integrity="sha384-KtmfosZaF4BaDBojD9RXBSrq5pNEO79xGiggBxf8tsX+w2dBRpVW5o0BPto2Rb2F" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/fontawesome.css" integrity="sha384-8WwquHbb2jqa7gKWSoAwbJBV2Q+/rQRss9UXL5wlvXOZfSodONmVnifo/+5xJIWX" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.typekit.net/pqq2exl.css" />
          <script type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js"></script>
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
        hostname
      }
    }
  }
`

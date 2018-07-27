import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css'

// Styles
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import '../components/Theme/Globals';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography:  {
    fontFamily: "'Lato', 'sans-serif'",
    fontSize: '18px',
  },
  overrides: {
    MuiTab: {
      root: {
        padding: global.padding / 2,
        fontFamily: global.fontFamily,
        margin: '0 5px',
        // backgroundColor: Teal[100],
        fontSize: '24px',
        height: 'auto'
      },
      rootPrimary: {
        color:'rgba(0,0,0,.7)',
      },
      rootPrimarySelected: {
        color:'#000',
        // backgroundColor: global.primary,
        // borderColor: global.primary,
        // color:'#fff'
      },
      label: {
        fontSize: '20px'
      }
    },
    MuiButton: {
      root: {
        padding: '15px 45px',
        fontSize: '16px',
      },
      raisedPrimary: {
        backgroundColor: global.primary,
      },
    },
  },
});

const Layout = ({ children, data }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/brands.css" integrity="sha384-KtmfosZaF4BaDBojD9RXBSrq5pNEO79xGiggBxf8tsX+w2dBRpVW5o0BPto2Rb2F" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/fontawesome.css" integrity="sha384-8WwquHbb2jqa7gKWSoAwbJBV2Q+/rQRss9UXL5wlvXOZfSodONmVnifo/+5xJIWX" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/pqq2exl.css" />
      </Helmet>

      { children() }
    </div>
  </MuiThemeProvider>

)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


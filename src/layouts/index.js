import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css'

// Styles
import { createMuiTheme } from 'material-ui/styles';
import Teal from 'material-ui/colors/teal';
import Amber from 'material-ui/colors/amber';

// colors
global.primary = '#FADB5C';
global.lighterGrey = '#fafafa';
global.lightGrey = '#ebebeb';
global.mediumGrey = '#656565';
global.darkGrey = '#151515';
global.blue = '#5b8edc';

// general
global.headerColor = '#0cadb7';
global.headerHeight = '56px';
global.maxWidth = '1000px';
global.smallPadding = '10px';
global.padding = '20px';
global.mediumPadding = '40px';
global.largePadding = '60px';
global.ultraPadding = '120px';
global.wrapper = {
  maxWidth: global.maxWidth,
  margin: '0 auto',
  padding: "" + global.ultraPadding + " " + global.padding +"",
  position: 'relative'
}
global.textField = {
  marginBottom: global.padding,
  minWidth: '260px'
}
global.fontFamily = 'pt-sans, helvetica, sans-serif'

const theme = createMuiTheme({
  palette: {
    primary: Amber,
    secondary: Teal
  },
  typography:  {
    fontFamily: "'pt-sans', 'futura', 'trebuchet', 'helvetica', 'sans-serif'",
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
        title={data.site.siteMetadata.title}
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

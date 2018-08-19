import theme from './Globals'
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
    word-break: break-word;
  }

  body {
    font-family: ${theme.fontFamily};
    min-height:100%;
    overflow-x: hidden;
    width: 100%;
    font-smoothing: antialiased;
    letter-spacing: .02em;
    margin:0;
    word-wrap: break-word;
    word-break: break-word;
  }

  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }

  body img {
    max-width:100%;
  }

  button {
    border:0;
  }

  ul {
    list-style-type: none;
    -webkit-padding-start: 0;
    -moz-padding-start: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    &:focus {
      outline: none;
    }
  }
`

import React, { Component } from 'react';
import Default from './Default/index'
import SimpleBackButton from './SimpleBackButton/index'


class Header extends Component {

  displayHeader() {
    const document = this.props.document;
    if(document) {
      if(document.data.header) {
        switch(document.data.header) {
          case 'Default':
            return <Default document={document} />

          case 'No Header':
            return null;

          case 'No Header with Back Button':
            return <SimpleBackButton />

          default:
            return <Default document={document} />
        }
      } else {
        return <Default document={document} />
      }
    } else {
      return <Default />
    }
  }

  render() {
    return this.displayHeader();
  }
}



export default Header;

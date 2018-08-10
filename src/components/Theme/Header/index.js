import React, { Component } from 'react';
import Default from './Default/index'
import SimpleBackButton from './SimpleBackButton/index'


class Header extends Component {

  displayHeader() {
    switch(this.props.display) {
      case 'Default': {
        return <Default />
      }
      case 'No Header': {
        return
      }
      case 'No Header with Back Button': {
        return <SimpleBackButton />
      }
      default: {
        return <Default />
      }
    }
  }

  render() {
    return (
      <div>
        { this.displayHeader() }
      </div>
    );
  }
}



export default Header;

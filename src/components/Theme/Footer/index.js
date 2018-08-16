import React, { Component } from 'react';
import Default from './Default/index'


class Footer extends Component {

  displayFooter() {
    switch(this.props.display) {
      case 'Default':
        return <Default />

      case 'No Footer':
        return null;

      default:
        return <Default />

    }
  }

  render() {
    return (
      <div>
        { this.displayFooter() }
      </div>
    );
  }
}



export default Footer;
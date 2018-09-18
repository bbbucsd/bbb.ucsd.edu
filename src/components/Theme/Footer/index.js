import React, { Component } from 'react';
import Default from './Default';
import Slim from './Slim';


class Footer extends Component {

  render() {
    switch(this.props.display) {
      case 'Default':
        return <Default />

      case 'Slim':
        return <Slim />

      case 'No Footer':
        return null;

      default:
        return <Default />
    }
  }

}



export default Footer;

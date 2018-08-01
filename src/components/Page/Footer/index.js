import React, { Component } from 'react';
import Default from './Default'


class Footer extends Component {

  displayFooter() {
    switch(this.props.display) {
      case 'Default': {
        return <Default />
      }
      case 'No Footer': {
        return
      }
      default: {
        return <Default />
      }
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

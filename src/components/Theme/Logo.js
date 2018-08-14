import React, { Component } from 'react';
import State from '../../state';
import _ from 'lodash';
import Img from "gatsby-image";

export default class extends Component {

  constructor(props) {
    super(props);
    const images = _.compact(_.filter(State.get("images"), (img) => img.relativeDirectory === "logos"));
    this.state = { images }
  }

  findImage(type) {
    return _.find(this.state.images, (img) => img.childImageSharp && img.name === type);
  }

  render() {
    const title = "Automate Your Brand";
    let img;
    switch (this.props.color) {
      case 'blueWhite':
        img = this.findImage('automate-your-brand-logo-blue-white');
        break;
      case 'white':
        img = this.findImage('automate-your-brand-logo-white');
        break;
      case 'grayWhite':
        img = this.findImage('automate-your-brand-logo-gray-white');
        break;
      case 'blue':
        img = this.findImage('automate-your-brand-logo');
        break;
      case 'blue':
        img = this.findImage('automate-your-brand-logo');
        break;
      default:
        img = this.findImage('automate-your-brand-logo-blue-white');
        break;
    }
    return (
      <Img
        title={title}
        alt={title}
        sizes={img.childImageSharp.sizes}
      />
    );
  }
}

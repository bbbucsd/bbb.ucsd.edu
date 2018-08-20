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
    const title = State.get("siteName");
    let img;
    switch (this.props.color) {
      case 'colorWhite':
        img = this.findImage('books-beyond-boundaries-color-white');
        break;
      case 'white':
        img = this.findImage('books-beyond-boundaries-white');
        break;
      default:
        img = this.findImage('books-beyond-boundaries-color-white');
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

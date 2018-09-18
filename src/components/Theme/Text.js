// eslint-disable-next-line
import React, { Component } from 'react';
import { RichText } from 'prismic-dom';
import _ from 'lodash';

export default class Text extends Component {

  render() {
    if (this.props.body) {
      return _.isArray(this.props.body) ? RichText.asText(this.props.body) : this.props.body.text;
    } else {
      return null;
    }
  }

}

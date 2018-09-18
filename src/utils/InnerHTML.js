import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import processHtml from './processHTML';
import { RichText } from 'prismic-dom'
import _ from 'lodash';

export default class InnerHTML extends Component {
  render() {
    if (this.props.html) {
      return (
        <div>
          {ReactHtmlParser(this.props.html.html || (_.isArray(this.props.html) && RichText.asHtml(this.props.html)), { transform: processHtml })}
        </div>
      );
    } else {
      return null;
    }
  }
}

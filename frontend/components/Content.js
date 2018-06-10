import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import processLinks from '../utils/processLinks.js';

export default class Content extends Component {

  renderContent(html) {
    return ReactHtmlParser(html, { transform: processLinks });
  }

  render() {
    return (
      <div className="content mb-5">
        {this.renderContent(this.props.body)}
      </div>
    )
  }
}

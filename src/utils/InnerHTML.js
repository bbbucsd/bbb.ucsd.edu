import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import processHtml from './processHTML';

export default class InnerHTML extends Component {
  render() {
    return (
      <div>
        {ReactHtmlParser(this.props.children, { transform: processHtml })}
      </div>
    );
  }
}

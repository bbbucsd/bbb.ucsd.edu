import React, { Component } from 'react';
import Content from './Content';
import ReactHtmlParser from 'react-html-parser';

export default class Page extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="headline container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-text">
                  <h1 className="name">{this.props.page.title.rendered}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-5">
              <Content body={this.props.page.content.rendered} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

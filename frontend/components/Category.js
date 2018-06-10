import React, { Component } from "react";
import PostIndex from "./PostIndex";
import Content from './Content';
import Link from 'next/link';

export default class Category extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="headline container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-text">
                  <h1 className="name">{this.props.category.name}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-5">
              <Content body={this.props.category.description} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-5">
              <PostIndex categoryID={this.props.category.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

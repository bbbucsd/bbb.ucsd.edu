import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";
import _ from 'lodash';

class Post extends Component {
  static async getInitialProps(context) {
    const { req, res, err } = context;
    const { slug } = context.query;
    const postRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/post?slug=${slug}`);
    const post = await postRes.json();
    if (post.title) {
      return { post };
    } else {
      return { statusCode: 404 };
    }
  }

  render() {
    return (
      <div>
        <div className="hero">
          <div className="headline container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-text">
                  <h1 className="name">{this.props.post.title.rendered}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 pt-5">
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: this.props.post.content.rendered
                }}
              />
            </div>
            <div className="col-lg-4 pt-5 bg-white"
              dangerouslySetInnerHTML={{
                __html: this.props.sidebar.widgets.map((widget) => widget.rendered)
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PageWrapper(Post);

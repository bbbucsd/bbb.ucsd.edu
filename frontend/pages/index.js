import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Content from '../components/Content.js';

const headerImageStyle = {
  marginTop: 50,
  marginBottom: 50
};

class Index extends Component {
  static async getInitialProps(context) {
    const pageRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/frontpage`
    );
    const page = await pageRes.json();
    return { page };
  }

  render() {
    return (
      <div>
        <div className="hero">
          <div className="headline container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="intro-text">
                  <h1 className="name">{this.props.page.title.rendered}</h1>
                  <span className="skills">
                    <a href="" className="btn btn-md btn-info">
                      Show Me How
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-xs-10 offset-xs-1">
                <div className="content">
                  <Content body={this.props.page.content.rendered} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default PageWrapper(Index);

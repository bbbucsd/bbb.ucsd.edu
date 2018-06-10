import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";
import PageComponent from '../components/Page.js';
import CategoryComponent from '../components/Category.js';

class Page extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    console.log(context.req);
    const pageRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/page?slug=${slug}`);
    if (pageRes.status === 200) {
      const page = await pageRes.json();
      return { page };
    } else {
      const categoryRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/category?slug=${slug}`);
      if (categoryRes.status === 200) {
        const category = await categoryRes.json();
        return { category };
      } else {
        return { statusCode: 404 };
      }
    }
  }

  render() {
    if (this.props.page) {
      return <PageComponent {...this.props} />
    } else if (this.props.category) {
      return <CategoryComponent {...this.props} />
    } else {
      return null;
    }
  }
}

export default PageWrapper(Page);

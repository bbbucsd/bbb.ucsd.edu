import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Category extends Component {

  static async getInitialProps(context) {
    const { slug } = context.query;
    const categoryRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/category?slug=${slug}`);
    const category = await categoryRes.json();
    return { category };
  }

  render() {
    return <CategoryComponent {...this.props} />
  }

}

export default PageWrapper(Category);

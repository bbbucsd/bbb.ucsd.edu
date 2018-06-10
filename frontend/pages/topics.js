import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from "../config.js";

class Topics extends Component {

  static async getInitialProps(context) {
    const categoriesRes = await fetch( `${Config.apiUrl}/wp-json/wp/v2/categories`);
    const categories = await categoriesRes.json();
    return { categories };
  }

  render() {
    return (
      <div>
        {this.props.categories.map((c) => c.name)}
      </div>
    );
  }
}

export default PageWrapper(Topics);

import React, { Component } from 'react';
import PageWrapper from "../components/PageWrapper.js";
import Error from "next/error";

class Error404 extends Component {
  static async getInitialProps(args) {
    return { statusCode: 404, isErrorPage: true };
  }

  render() {
    return <Error statusCode={404} />;
  }
}

export default PageWrapper(Error404);

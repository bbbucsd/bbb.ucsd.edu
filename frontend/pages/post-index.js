import Layout from "../components/Layout.js";
import React, { Component } from 'react';
import PostIndexComponent from "../components/PostIndex";
import fetch from "isomorphic-unfetch";
import { Config } from '../config';

class PostIndex extends Component {

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Post Index</h1>
        <PostIndexComponent limit={20} />
      </div>
    )
  }
}

export default PageWrapper(PostIndex);

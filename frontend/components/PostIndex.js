import React, { Component } from 'react';
import fetch from "isomorphic-unfetch";
import { Config } from '../config';
import Link from 'next/link';

export default class PostIndex extends Component {
  static defaultProps = {
    postsEndpoint: `${Config.apiUrl}/wp-json/wp/v2/posts`,
    limit: 5,
    categoryID: null
  }

  state = {
    posts: []
  }

  // Get access to post data from WP API
  async componentWillMount() {
    const { postsEndpoint, limit, categoryID } = this.props;
    let endpoint = postsEndpoint
    endpoint += `?per_page=${limit}`;
    if (categoryID) { endpoint += `&categories=${categoryID}`; }
    const postsRes = await fetch(endpoint);
    const posts = await postsRes.json();
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <section>
        <h3>Archive</h3>
        <ol>
          {posts.map(post => (
            <li key={post.id}>
              <Link
                href={`/post?slug=${post.slug}&apiRoute=post`}
                as={`/post/${post.slug}`}
                >
                <a>{post.title.rendered}</a>
              </Link>
            </li>
            ))}
        </ol>
      </section>
    )
  }
}

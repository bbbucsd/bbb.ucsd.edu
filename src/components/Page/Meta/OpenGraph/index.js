import React, { Component } from 'react';
import Helmet from 'react-helmet';

class OpenGraph extends Component {

  render() {
    return (
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="" />
        <meta property="og:title" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta property="og:description" content="" />
      </Helmet>
    )
  }
}


export default OpenGraph;

export const query = graphql`
  fragment OpenGraph on PrismicPageBody2OpenGraph {
    slice_type
    primary {
      open_graph_title
      open_graph_description
    }
  }
`;

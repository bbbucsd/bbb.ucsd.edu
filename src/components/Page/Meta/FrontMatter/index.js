import React, { Component } from 'react';
import Helmet from 'react-helmet';

class FrontMatter extends Component {

  render() {
    const { site_title, meta_keywords, meta_description } = this.props.data

    return (
      <Helmet>
        <title>{site_title}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keywords} />
      </Helmet>
    )
  }
}


export default FrontMatter;

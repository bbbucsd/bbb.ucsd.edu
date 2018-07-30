import React, { Component } from 'react';
import Helmet from 'react-helmet';

class FrontMatter extends Component {

  render() {
    const {site_title, meta_description} = this.props.data

    return (
      <Helmet>
        <title>{site_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
    )
  }
}


export default FrontMatter;

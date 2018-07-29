import React, { Component } from 'react';
import Helmet from 'react-helmet';
import MetaHelper from 'components/Meta/Helper';


class FrontMatter extends Component {

  render() {
    const data = MetaHelper.FrontMatterFields(this.props.data)
    const {site_title, meta_keywords, meta_description} = data

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


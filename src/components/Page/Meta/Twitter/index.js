import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Config from '../../../../config';
import _ from 'lodash';

class Twitter extends Component {

  getTypeFromTags(tags) {
    let type = "website";

    if(_.some(tags, (tag) => tag === "Post")) {
      type = "article";
    }

    if(_.some(tags, (tag) => tag === "Main")) {
      type = "website";
    }

    return type;
  }

  setType(type) {
    return (
      <meta key="twitter_type" property="twitter:type" content={type} />
    );
  }


  setSite(slice) {
    let site;
    if (slice && slice.twitter_site) {
      site = slice.twitter_site;
    } else {
      site = Config.get('twitter').site;
    }
    return (
      <meta key="twitter_site" property="twitter:site" content={site} />
    );
  }

  setCreator(slice) {
    let creator;
    if (slice && slice.twitter_creator) {
      creator = slice.twitter_creator;
    } else {
      creator = Config.get('twitter').creator;
    }
    return (
      <meta key="twitter_creator" property="twitter:creator" content={creator} />
    );
  }

  setTitle(slice) {
    let title = Config.get('title');
    if (slice && slice.twitter_title) {
      title = slice.twitter_title
    }
    return (
      <meta key="twitter_title" property="twitter:title" content={title} />
    );
  }

  setDescription(slice) {
    let metaDescription;
    if (slice && slice.twitter_description) {
      metaDescription = slice.twitter_description
    } else {
      metaDescription = Config.get('metaDescription');
    }
    return (
      <meta key="twitter_description" property="twitter:description" content={metaDescription} />
    );
  }

  setUrl() {
    let { pathname } = Config.get("currentUrl");
    let url = Config.get("siteUrl");

    if (pathname !== "/") {
      url = url + pathname;
    }

    return (
      <meta key="twitter_url" property="twitter:url" content={url} />
    );
  }

  setImage(slice) {
    let image;
    if (slice && slice.twitter_image) {
      image = slice.twitter_image.url
    } else {
      image = (Config.get("openGraph") && Config.get("openGraph").image) || Config.get('image');
    }
    return (
      <meta key="twitter_image" property="twitter:image" content={image} />
    );
  }

  render() {
    const { tags, slices } = this.props;
    const type = this.getTypeFromTags(tags);
    let metaTags = [];

    let slice = _.find(slices, (s) => s.slice_type === "twitter")
    if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

    metaTags.push(this.setType(type));
    metaTags.push(this.setSite(slice));
    metaTags.push(this.setTitle(slice));
    metaTags.push(this.setDescription(slice));
    metaTags.push(this.setUrl());
    metaTags.push(this.setImage(slice));

    metaTags = _.compact(_.flatten(metaTags));
    return (
      <Helmet>
        <meta key="twitter_card" name="twitter:card" content="summary_large_image" />
        {metaTags}
      </Helmet>
    )
  }
}


export default Twitter;

export const query = graphql`
  fragment Twitter on PrismicPageBody2Twitter {
    slice_type
    primary {
      twitter_title
      twitter_description
      twitter_site
      twitter_creator
      twitter_image {
        url
      }
    }
  }
`;

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Config from '../../../config';
import _ from 'lodash';

class OpenGraph extends Component {

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

  setFbAppId() {
    let appId = Config.get("openGraph").fbAppId;
    return (
      <meta key="fb_app_id" property="fb:app_id" content={appId} />
    );
  }

  setType(type) {
    return (
      <meta key="og_type" property="og:type" content={type} />
    );
  }

  setSiteName(slice) {
    let siteName = Config.get('siteName');
    if (slice && slice.open_graph_site_name) {
      siteName = slice.open_graph_site_name
    }
    return (
      <meta key="og_site_name" property="og:site_name" content={siteName} />
    );
  }

  setTitle(slice) {
    let title;
    if (slice && slice.open_graph_title) {
      title = slice.open_graph_title
    } else {
      title = Config.get('title');
    }
    return (
      <meta key="og_title" property="og:title" content={title} />
    );
  }

  setDescription(slice) {
    let metaDescription = Config.get('metaDescription');
    if (slice && slice.open_graph_description) {
      metaDescription = slice.open_graph_description
    }
    return (
      <meta key="og_description" property="og:description" content={metaDescription} />
    );
  }

  setLocale() {
    let locale = Config.get('locale');
    return (
      <meta key="og_locale" property="og:locale" content={locale} />
    );
  }

  setLocaleAlt(slice) {
    if (slice && slice.items && slice.items.length) {
      const localeTags = [];
      slice.items.forEach((item, index) => {
        localeTags.push((
          <meta key={`og_locale_${index}`} property="og:locale:alternate" content={item.open_graph_locale_alternate} />
        ));
      })
      return (localeTags.length ? _.flatten(localeTags) : null);
    } else {
      return null;
    }

  }

  setUrl() {
    const url = Config.get("currentUrl");
    return (
      <meta key="og_url" property="og:url" content={url} />
    );
  }

  setImage(slice) {
    let image;
    if (slice && slice.open_graph_image) {
      image = slice.open_graph_image.url
    } else {
      image = (Config.get("openGraph") && Config.get("openGraph").image) || Config.get('image');
    }
    return (
      <meta key="og_image" property="og:image" content={image} />
    );
  }

  setImageHeight(slice) {
    let height;
    if (slice && slice.open_graph_image && slice.open_graph_image.dimensions) {
      height = slice.open_graph_image.dimensions.height
    } else {
      height = (Config.get("openGraph") && Config.get("openGraph").imageHeight) || null;
    }

    if (!!parseInt(height)) {
      return (
        <meta key="og_image_height" property="og:image:height" content={height} />
      );
    } else {
      return null;
    }
  }

  setImageWidth(slice) {
    let width;
    if (slice && slice.open_graph_image && slice.open_graph_image.dimensions) {
      width = slice.open_graph_image.dimensions.width;
    } else {
      width = (Config.get("openGraph") && Config.get("openGraph").imageWidth) || null;
    }

    if (!!parseInt(width)) {
      return (
        <meta key="og_image_width" property="og:image:width" content={width} />
      );
    } else {
      return null;
    }
  }

  render() {
    const { tags, slices } = this.props;
    const type = this.getTypeFromTags(tags);
    let metaTags = [];

    let slice = _.find(slices, (s) => s.slice_type === "open_graph")
    if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

    metaTags.push(this.setType(type));
    metaTags.push(this.setFbAppId());
    metaTags.push(this.setSiteName(slice));
    metaTags.push(this.setTitle(slice));
    metaTags.push(this.setDescription(slice));
    metaTags.push(this.setLocale());
    metaTags.push(this.setLocaleAlt(slice));
    metaTags.push(this.setUrl());
    metaTags.push(this.setImage(slice));
    metaTags.push(this.setImageHeight(slice));
    metaTags.push(this.setImageWidth(slice));

    metaTags = _.compact(_.flatten(metaTags));
    return (
      <Helmet>
        {metaTags}
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
      open_graph_image {
        url
        dimensions {
          width
          height
        }
      }
      open_graph_image_description
    }
    items {
      open_graph_locale_alternate
    }
  }
`;

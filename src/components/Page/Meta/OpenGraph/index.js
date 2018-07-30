import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Config from '../../../../../config';
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

  setType(type) {
    return (
      <meta property="og:type" content={type} />
    );
  }

  setTitle(slice) {
    let title = Config.get('title');
    if (slice) {
      title = slice.open_graph_title
    }
    return (
      <meta property="og:title" content={title} />
    );
  }

  setDescription(slice) {
    let metaDescription = Config.get('metaDescription');
    if (slice) {
      metaDescription = slice.open_graph_description
    }
    return (
      <meta property="og:description" content={metaDescription} />
    );
  }

  setLocale() {
    let locale = Config.get('locale');
    return (
      <meta property="og:locale" content={locale} />
    );
  }

  setLocaleAlt(slice) {
    if (slice) {
      const localeTags = [];
      slice.items.forEach((item) => {
        if (item.open_graph_locale_alternate) {
          localeTags.push((
            <meta property="og:locale:alternate" content={item.open_graph_locale_alternate} />
          ));
        }
      })
      return (localeTags.length ? localeTags : null);
    } else {
      return null;
    }

  }

  setUrl() {
    let { pathname } = Config.get("currentUrl");
    let url = Config.get("siteUrl");

    if (pathname !== "/") {
      url = url + pathname;
    }

    return (
      <meta property="og:url" content={url} />
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
      <meta property="og:image" content={image} />
    );
  }

  setImageHeight(slice) {
    let height;
    if (slice && slice.open_graph_image) {
      height = slice.open_graph_image.dimensions.height
    } else {
      height = (Config.get("openGraph") && Config.get("openGraph").imageHeight) || null;
    }

    if (!!parseInt(height)) {
      return (
        <meta property="og:image:height" content={height} />
      );
    } else {
      return null;
    }
  }

  setImageWidth(slice) {
    let width;
    if (slice && slice.open_graph_image) {
      width = slice.open_graph_image.dimensions.width;
    } else {
      width = (Config.get("openGraph") && Config.get("openGraph").imageWidth) || null;
    }

    if (!!parseInt(width)) {
      return (
        <meta property="og:image:width" content={width} />
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

import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import _ from 'lodash';

class OpenGraph extends Component {

  setFbAppId(config) {
    return null;
    //let appId = config.fbAppId;
    //return (
      //<meta key="fb_app_id" property="fb:app_id" content={appId} />
    //);
  }

  setType(type) {
    let ogType;
    switch (type) {
      case 'post':
        ogType = 'article';
        break;
      default:
        ogType = 'website';
    }
    return (
      <meta key="og_type" property="og:type" content={ogType} />
    );
  }

  setSiteName(config, slice) {
    let siteName = config.siteName;
    if (slice && slice.open_graph_site_name) {
      siteName = slice.open_graph_site_name
    }
    return (
      <meta key="og_site_name" property="og:site_name" content={siteName} />
    );
  }

  setTitle(config, slice, frontMatter) {
    let title;
    if (slice && slice.open_graph_title) {
      title = slice.open_graph_title
    } else if(frontMatter.site_title) {
      title = frontMatter.site_title;
    } else {
      title = config.title;
    }
    return (
      <meta key="og_title" property="og:title" content={title} />
    );
  }

  setDescription(config, slice, frontMatter) {
    let metaDescription = config.metaDescription
    if (slice && slice.open_graph_description) {
      metaDescription = slice.open_graph_description
    } else if(frontMatter.meta_description) {
      metaDescription = frontMatter.meta_description;
    } else {
      metaDescription = config.metaDescription;
    }
    return (
      <meta key="og_description" property="og:description" content={metaDescription} />
    );
  }

  setLocale(config) {
    let locale = config.locale
    return (
      <meta key="og_locale" property="og:locale" content={locale} />
    );
  }

  setLocaleAlt(slice) {
    if (slice && slice.items && slice.items.length) {
      const localeTags = [];
      slice.items.forEach((item, index) => {
        if (item.open_graph_locale_alternate) {
          localeTags.push((
            <meta key={`og_locale_${index}`} property="og:locale:alternate" content={item.open_graph_locale_alternate} />
          ));
        }
      })
      return (localeTags.length ? _.flatten(localeTags) : null);
    } else {
      return null;
    }

  }

  setUrl(config, location) {
    let url;
    const { pathname } = location;
    if (pathname === "/") {
      url = config.siteUrl;
    } else {
      url = config.siteUrl + pathname
    }
    return (
      <meta key="og_url" property="og:url" content={url} />
    );
  }

  setImage(config, slice) {
    let image;
    if (slice && slice.open_graph_image) {
      image = slice.open_graph_image.url
    } else {
      image = config.openGraph.image
    }
    return (
      <meta key="og_image" property="og:image" content={image} />
    );
  }

  setImageHeight(config, slice) {
    let height;
    if (slice && slice.open_graph_image && slice.open_graph_image.dimensions) {
      height = slice.open_graph_image.dimensions.height
    } else {
      height = config.openGraph.imageHeight;
    }

    if (!!parseInt(height)) {
      return (
        <meta key="og_image_height" property="og:image:height" content={height} />
      );
    } else {
      return null;
    }
  }

  setImageWidth(config, slice) {
    let width;
    if (slice && slice.open_graph_image && slice.open_graph_image.dimensions) {
      width = slice.open_graph_image.dimensions.width;
    } else {
      width = config.openGraph.imageWidth;
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
    return (
      <Fragment>
        <StaticQuery
          query={graphql`
            query OpenGraphQuery {
              site {
                siteMetadata {
                  siteUrl
                  siteName
                  metaDescription
                  title
                  locale
                  openGraph {
                    fbAppId
                    image
                    imageHeight
                    imageWidth
                  }
                }
              }
            }
          `}
          render={data => {
            const { type, document, location } = this.props;
            const slices = document.data.body1;
            const config = data.site.siteMetadata;
            let metaTags = [];

            let slice = _.find(slices, (s) => s.__typename === "OpenGraph")
            let frontMatter = _.find(slices, (s) => s.__typename === "FrontMatter") || {};
            if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

            metaTags.push(this.setType(type));
            metaTags.push(this.setFbAppId(config));
            metaTags.push(this.setSiteName(config, slice));
            metaTags.push(this.setTitle(config, slice, frontMatter));
            metaTags.push(this.setDescription(config, slice, frontMatter));
            metaTags.push(this.setLocale(config));
            metaTags.push(this.setLocaleAlt(slice));
            metaTags.push(this.setUrl(config, location));
            metaTags.push(this.setImage(config, slice));
            metaTags.push(this.setImageHeight(config, slice));
            metaTags.push(this.setImageWidth(config, slice));

            metaTags = _.compact(_.flatten(metaTags));
            return (
              <Helmet>
                {metaTags}
              </Helmet>
            )
          }}
        />
      </Fragment>
    )
  }
}

export default OpenGraph;

export const query = graphql`
  fragment OpenGraph on OpenGraph {
    __typename
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

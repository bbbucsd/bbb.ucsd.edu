import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import _ from 'lodash';

class Twitter extends Component {

  setType(type) {
    let twitterType;
    switch (type) {
      case 'post':
        twitterType = 'article';
        break;
      default:
        twitterType = 'website';
    }
    return (
      <meta key="twitter_type" property="twitter:type" content={twitterType} />
    );
  }

  setSite(config) {
    return (
      <meta key="twitter_site" property="twitter:site" content={config.twitter.site} />
    );
  }

  setCreator(config, slice) {
    let creator;
    if (slice && slice.twitter_creator) {
      creator = slice.twitter_creator;
    } else {
      creator = config.twitter.creator
    }
    return (
      <meta key="twitter_creator" property="twitter:creator" content={creator} />
    );
  }

  setTitle(config, slice, frontMatter) {
    let title;
    if (slice && slice.twitter_title) {
      title = slice.twitter_title
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
    let metaDescription;
    if (slice && slice.twitter_description) {
      metaDescription = slice.twitter_description;
    } else if(frontMatter.meta_description) {
      metaDescription = frontMatter.meta_description;
    } else {
      metaDescription = config.meta_description;
    }
    return (
      <meta key="twitter_description" property="twitter:description" content={metaDescription} />
    );
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
      <meta key="twitter_url" property="twitter:url" content={url} />
    );
  }

  setImage(config, slice) {
    let image;
    if (slice && slice.twitter_image) {
      image = slice.twitter_image.url
    } else {
      image = config.image;
    }
    return (
      <meta key="twitter_image" property="twitter:image" content={image} />
    );
  }

  render() {
    return (
      <Fragment>
        <StaticQuery
          query={graphql`
            query TwitterQuery {
              site {
                siteMetadata {
                  siteUrl
                  siteName
                  metaDescription
                  title
                  image
                  twitter {
                    image
                    site
                    creator
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

            let slice = _.find(slices, (s) => s.__typename === "Twitter");
            let frontMatter = _.find(slices, (s) => s.__typename === "FrontMatter") || {};
            if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

            metaTags.push(this.setType(type));
            metaTags.push(this.setSite(config));
            metaTags.push(this.setCreator(config, slice));
            metaTags.push(this.setTitle(config, slice, frontMatter));
            metaTags.push(this.setDescription(config, slice, frontMatter));
            metaTags.push(this.setUrl(config, location));
            metaTags.push(this.setImage(config, slice));

            metaTags = _.compact(_.flatten(metaTags));
            return (
              <Helmet>
                <meta key="twitter_card" name="twitter:card" content="summary_large_image" />
                {metaTags}
              </Helmet>
            )
          }}
        />
      </Fragment>
    )
  }
}


export default Twitter;

export const query = graphql`
  fragment Twitter on Twitter {
    __typename
    primary {
      twitter_title
      twitter_description
      twitter_creator
      twitter_image {
        url
      }
    }
  }
`;

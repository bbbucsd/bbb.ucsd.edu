import React, { Fragment, Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import _ from 'lodash';

class FrontMatter extends Component {

  setTitle(config, slice) {
    let title;
    if (slice && slice.site_title) {
      title = slice.site_title;
    } else {
      title = config.title;
    }
    return (
      <title key="title">{title}</title>
    );
  }

  setDescription(config, slice) {
    let metaDescription
    if (slice && slice.meta_description) {
      metaDescription = slice.meta_description;
    } else {
      metaDescription = config.metaDescription;
    }
    return (
      <meta key="meta_description" name="description" content={metaDescription} />
    );
  }

  setCanonical(config, location, slice) {
    let canonicalUrl;
    if (slice && slice.canonical_url && slice.canonical_url.url) {
      canonicalUrl = slice.canonical_url.url;
    } else {
      const { pathname } = location;
      if (pathname === "/") {
        canonicalUrl = config.siteUrl;
      } else {
        canonicalUrl = config.siteUrl + pathname
      }
    }

    return (
      <link key="canonical" rel="canonical" href={canonicalUrl} />
    );
  }

  setRobots(slice = {}) {
    const {
      display_in_search_results,
      follow_links,
      meta_robots_advanced
    } = slice;
    let content = [];
    if (display_in_search_results === "No" || meta_robots_advanced === "No Index") {
      content.push("noindex");
    }
    if (follow_links === "No") {
      content.push("nofollow");
    }

    if (meta_robots_advanced === "No Archive") {
      content.push("noarchive");
    }

    if (meta_robots_advanced === "No Image Index") {
      content.push("noimageindex");
    }

    if (meta_robots_advanced === "No Snippet") {
      content.push("nosnippet");
    }

    if (content.length) {
      return (
        <meta key="meta-robots" name="robots" content={content.join(",")} />
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
            query FrontMatterQuery {
              site {
                siteMetadata {
                  siteUrl
                  siteName
                  metaDescription
                  title
                  locale
                }
              }
            }
          `}
          render={data => {
            const { document, location } = this.props;
            const slices = document.data.body1;
            const config = data.site.siteMetadata;
            let metaTags = [];

            let slice = _.find(slices, (s) => s.__typename === "FrontMatter")
            if (slice) { slice = Object.assign({}, slice.primary, { items: (slice.items || []) }); }

            metaTags.push(this.setTitle(config, slice));
            metaTags.push(this.setDescription(config, slice));
            metaTags.push(this.setCanonical(config, location, slice));
            metaTags.push(this.setRobots(config, slice));

            metaTags = _.compact(_.flatten(metaTags));
            return (
              <Helmet>
                {metaTags}
                <link rel="shortcut icon" href="/images/icons/favicon.png" />
              </Helmet>
           );
          }
        }
      />
      </Fragment>
    )
  }
}


export default FrontMatter;

export const query = graphql`
  fragment FrontMatter on FrontMatter {
    __typename
    primary {
      site_title
      meta_description
      follow_links
      display_in_search_results
      meta_robots_advanced
      canonical_url {
        url
      }
    }
  }
`;

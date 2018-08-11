import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import Config from '../../config';

class FrontMatter extends Component {

  setTitle(title) {
    if (!title) {
      title = Config.get('title');
    }
    return (
      <title key="title">{title}</title>
    );
  }

  setDescription(metaDescription) {
    if (!metaDescription) {
      metaDescription = Config.get('metaDescription');
    }

    return (
      <meta key="meta_description" property="meta_description" content={metaDescription} />
    );
  }

  setCanonical(canonicalUrl) {
    if (!canonicalUrl) {
      canonicalUrl = Config.get('currentUrl').replace(/\/$/, "");;
    }

    return (
      <link key="canonical" rel="canonical" href={canonicalUrl} />
    );
  }

  setRobots(data) {
    const {
      display_in_search_results,
      follow_links,
      meta_robots_advanced
    } = data;
    let content = [];
    if (display_in_search_results === "Yes" || meta_robots_advanced === "No Index") {
      content.push("noindex");
    }
    if (follow_links === "Yes") {
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

    return (
      <meta key="meta-robots" name="robots" content={content.join(",")} />
    );
  }

  render() {
    let metaTags = [];

    const {
      site_title,
      meta_description,
      canonical_url
    } = this.props.data;

    metaTags.push(this.setTitle(site_title));
    metaTags.push(this.setDescription(meta_description));
    metaTags.push(this.setCanonical(canonical_url && canonical_url.url));
    metaTags.push(this.setRobots(this.props.data));

    metaTags = _.compact(_.flatten(metaTags));
    return (
      <Fragment>
        {metaTags}
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

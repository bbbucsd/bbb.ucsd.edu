import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby'
import SocialScroll from './SocialScroll';
import CookiePolicy from './CookiePolicy';

class Features extends Component {

  render() {
    const { document } = this.props;
    return (
      <Fragment>
        {document.data.social_scroll_enabled === "Yes" ? (
          <SocialScroll />
        ) : null}
        {document.data.cookie_policy_enabled === "Yes" ? (
          <CookiePolicy />
        ) : null}
      </Fragment>
    );
  }
}

export default Features;

export const query = graphql`
  fragment Features on Node {
    __typename
    ... on Post {
      data {
        social_scroll_enabled
        cookie_policy_enabled
      }
    }
    ... on Page {
      data {
        social_scroll_enabled
        cookie_policy_enabled
      }
    }
  }
`;

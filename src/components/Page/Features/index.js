import React, { Fragment, Component } from 'react';
import SocialScroll from './SocialScroll';
import CookiePolicy from './CookiePolicy';

class Features extends Component {

  render() {
    const { page } = this.props;

    return (
      <Fragment>
        {page.social_scroll_enabled === "Yes" ? (
          <SocialScroll />
        ) : null}
        {page.cookie_policy_enabled === "Yes" ? (
          <CookiePolicy />
        ) : null}
      </Fragment>
    );
  }
}

export default Features;

export const query = graphql`
  fragment Features on PrismicPage {
    data {
      social_scroll_enabled
      cookie_policy_enabled
    }
  }
`;

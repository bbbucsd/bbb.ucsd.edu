import React from 'react';
import Cookies from 'js-cookie';
import qs from 'qs';
import Prismic from 'prismic-javascript';
import PrismicHelper from '../utils/prismicHelper';
import { StaticQuery, graphql, navigate } from 'gatsby';

const PREVIEW_EXPIRES = 1/48; // 30 minutes

export default class Preview extends React.Component {

  componentDidMount() {
    PrismicHelper.refreshToolbar();
  }

  componentDidUpdate() {
    PrismicHelper.refreshToolbar();
  }

  navigateUrl(data) {
    if (!this.props.location.search) { return; }
    const params = qs.parse(this.props.location.search.slice(1));
    const apiEndpoint = data.site.siteMetadata.prismicEndpoint;
    Prismic.api(apiEndpoint).then(api => {
      api.previewSession(params.token, PrismicHelper.pathResolver, '/').then((url) => {
        Cookies.set(Prismic.previewCookie, params.token, { expires: PREVIEW_EXPIRES });
        navigate(url);
      }).catch((error) => {
        navigate('/404');
      });
    });
  }

  render() {
    return (
      <section id="middle">
        <article id="content">
          <StaticQuery
            query={graphql`
              query PreviewQuery {
                site {
                  siteMetadata {
                    title
                    prismicEndpoint
                  }
                }
              }
            `}
            render={data => {
              this.navigateUrl(data);
              return null;
            }}
          />
          <h1>Loading Preview...</h1>
        </article>
      </section>
    )
  }
}

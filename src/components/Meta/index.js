import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import PrismicConfig from 'utils/prismicHelper';

import FrontMatter from './FrontMatter';
import OpenGraph from './OpenGraph';
import Twitter from './Twitter';
import SchemaOrganization from './SchemaOrganization';
import SchemaWebsite from './SchemaWebsite';
import SchemaPerson from './SchemaPerson';
import SchemaArticle from './SchemaArticle';
import SchemaWebpage from './SchemaWebpage';

export default class Meta extends Component {
  render() {
    const { type, location, document } = this.props;

    return (
      <Fragment>
        <Helmet>
          <html lang="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <script>{`window.prismic = { endpoint: '${PrismicConfig.apiEndpoint}' }`}</script>
          <script async type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js"></script>
          <script>{process.env.NODE_ENV === "production" && `(function(p,e,r,s,o,n,a,l){o=p.getElementsByTagName(r)[0];(n=p.createElement('link')).rel='preload',n.href=s,n.as=r,o.parentNode.insertBefore(n,o);a=p.documentElement,a.style.opacity=0,setTimeout(function(){a.style.opacity=''},e);(l=p.createElement(r)).src=s,l.async=true,o.parentNode.insertBefore(l,o)})(document,3000,'script','https://unless.com/js/v5/latest/txt.min.js?id=6eb3feee-9516-4f19-b863-59fffcd06732');`}</script>
        </Helmet>
        <FrontMatter location={location} document={document} />
        <OpenGraph location={location} document={document} type={type} />
        <Twitter location={location} document={document} type={type} />
        <SchemaOrganization location={location} />
        <SchemaWebsite location={location} />
        <SchemaPerson />
        <SchemaArticle location={location} document={document} type={type} />
        <SchemaWebpage location={location} document={document} />
      </Fragment>
    );
  }
}

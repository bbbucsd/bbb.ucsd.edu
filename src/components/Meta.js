import React, { Component } from 'react';
import Helmet from 'react-helmet';

class SEO extends Component {
  render() {
    const { seo, slug } = this.props;
    let title;
    let description;
    let image;
    let imgWidth;
    let imgHeight;
    let pageUrl;
    let openGraphTitle;
    let openGraphImage;
    let openGraphLocale;
    let openGraphDescription;
    let twitterTitle;
    let twitterImage;
    let twitterDescription;

    // Set Default OpenGraph Parameters for Fallback
    title = global.siteTitle;
    description = global.siteDescription;
    image = global.siteUrl + global.shareImage;
    imgWidth = global.shareImageWidth;
    imgHeight = global.shareImageHeight;
    pageUrl = global.siteUrl;
    openGraphDescription = seo.metaDescription;
    openGraphTitle = global.siteTitle;
    openGraphImage = image;

    if(seo.title) {
      title = seo.title;
    }

    if(seo.metaDescription) {
      description = seo.metaDescription;
    }

    if (seo.openGraphDescription) {
      openGraphDescription = seo.openGraphDescription;
    }

    if (seo.openGraphTitle) {
      openGraphTitle = seo.openGraphTitle;
    }

    if (seo.openGraphTitle) {
      openGraphTitle = seo.openGraphTitle;
    }

    if (seo.openGraphImage) {
      openGraphImage = seo.openGraphImage;
      imgHeight = "";
      imgWidth = "";
    }

    if (seo.twitterDescription) {
      twitterDescription = seo.twitterDescription;
    }

    if (seo.twitterTitle) {
      twitterTitle = seo.twitterTitle;
    }

    if (seo.twitterImage) {
      twitterImage = seo.twitterImage;
    }

    pageUrl = global.siteUrl + slug;

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: global.siteUrl,
        name: global.siteTitle,
        alternateName: global.siteTitleAlt ? global.siteTitleAlt : '',
      },
    ];

    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      url: pageUrl,
      name: title,
    });

    return (
      <Helmet>
        {/* General tags */}
        <meta name="image" content={image} />
        <meta name="description" content={description} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        {/* TODO: add type to component */}
        <meta property="og:type" content="website" />

        <meta property="og:locale" content={openGraphTitle} />
        <meta property="og:title" content={openGraphTitle} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={imgWidth} />
        <meta property="og:image:height" content={imgHeight} />
        <meta property="og:description" content={openGraphDescription} />
        {/* fb:app_id */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* twitter site */}
        <meta
          name="twitter:creator"
          content={global.userTwitter ? global.userTwitter : ''}
        />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:description" content={twitterDescription} />
      </Helmet>
    )
  }
}

export default SEO;

//export const query = graphql`
  //fragment PageSeo on ContentfulLayoutSeo {
    //title
    //metaDescription
  //}
//`;

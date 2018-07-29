import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import OpenGraph from './OpenGraph';
import SchemaPerson from './SchemaPerson';

class Meta extends Component {

  renderSlice(defaultSlice, slice) {
    switch (defaultSlice.slice_type) {
      case 'open_graph':
        return <OpenGraph defaultSlice={defaultSlice} slice={slice} />
    };
  }

  renderSlices(defaultMeta, meta) {
    const defaultMetaSlices = defaultMeta.body;

    return defaultMetaSlices.map((defaultSlice) => {
      let slice = _.find(meta, (slice) => slice.slice_type === defaultSlice.slice_type)
      return this.renderSlice(defaultSlice, slice);
    });
  }

  renderSlice(slice, index) {
    switch (slice.__typename) {
    }
  }

  render() {
    const { defaultMeta, meta } = this.props;
    const schemaOrgJSONLD = [];
    let title = defaultMeta.site_title;
    let description = defaultMeta.meta_description;
    let keywords = defaultMeta.meta_keywords;
    let image = defaultMeta.image;
    //let imgWidth;
    //let imgHeight;
    //let pageUrl;
    //let openGraphTitle;
    //let openGraphImage;
    //let openGraphLocale;
    //let openGraphDescription;
    //let twitterTitle;
    //let twitterImage;
    //let twitterDescription;

    //imgWidth = global.shareImageWidth;
    //imgHeight = global.shareImageHeight;
    //pageUrl = global.siteUrl;
    //openGraphDescription = seo.metaDescription;
    //openGraphTitle = global.siteTitle;
    //openGraphImage = image;

    //if(seo.title) {
      //title = seo.title;
    //}

    //if(seo.metaDescription) {
      //description = seo.metaDescription;
    //}

    //if (seo.openGraphDescription) {
      //openGraphDescription = seo.openGraphDescription;
    //}

    //if (seo.openGraphTitle) {
      //openGraphTitle = seo.openGraphTitle;
    //}

    //if (seo.openGraphTitle) {
      //openGraphTitle = seo.openGraphTitle;
    //}

    //if (seo.openGraphImage) {
      //openGraphImage = seo.openGraphImage;
      //imgHeight = "";
      //imgWidth = "";
    //}

    //if (seo.twitterDescription) {
      //twitterDescription = seo.twitterDescription;
    //}

    //if (seo.twitterTitle) {
      //twitterTitle = seo.twitterTitle;
    //}

    //if (seo.twitterImage) {
      //twitterImage = seo.twitterImage;
    //}

    //pageUrl = global.siteUrl + slug;

      //{
        //'@context': 'http://schema.org',
        //'@type': 'WebSite',
        //url: global.siteUrl,
        //name: global.siteTitle,
        //alternateName: global.siteTitleAlt ? global.siteTitleAlt : '',
      //},

    //schemaOrgJSONLD.push({
      //'@context': 'http://schema.org',
      //'@type': 'WebPage',
      //url: pageUrl,
      //name: title,
    //});


    //{[> OpenGraph tags <]}
    //{[> TODO: add type to component <]}
    //<meta property="og:type" content="website" />
    //<meta property="og:locale" content={openGraphTitle} />
    //<meta property="og:title" content={openGraphTitle} />
    //<meta property="og:url" content={pageUrl} />
    //<meta property="og:image" content={image} />
    //<meta property="og:image:width" content={imgWidth} />
    //<meta property="og:image:height" content={imgHeight} />
    //<meta property="og:description" content={openGraphDescription} />
    //{[> fb:app_id <]}

    //{[> Twitter Card tags <]}
    //<meta name="twitter:card" content="summary_large_image" />

    //{[> twitter site <]}
    //<meta
      //name="twitter:creator"
      //content={global.userTwitter ? global.userTwitter : ''}
    ///>
    //<meta name="twitter:title" content={twitterTitle} />
    //<meta name="twitter:image" content={twitterImage} />
    //<meta name="twitter:description" content={twitterDescription} />
    return (
      <Helmet>
        {/* General tags */}
        <title>{title}</title>,
        <meta name="description" content={description} />,
        <meta name="keywords" content={keywords} />,
        <meta name="image" content={image} />

        {this.renderSlices(defaultMeta, meta)}

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
    )
  }
}

Meta.propTypes = {
  defaultMeta: PropTypes.object.isRequired,
}

export default Meta;

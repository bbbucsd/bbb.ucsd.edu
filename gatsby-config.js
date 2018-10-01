const PrismicConfig = require('./src/utils/prismicHelper');

var _ = require('lodash');

// dot env
if (process.env.NODE_ENV != 'production' || process.env.LOCAL_BUILD) {
  require('dotenv').config({
    path: `.env`,
  })
};

var config = _.cloneDeep({
  title: "Books Beyond Boundaries: Reducing Recidivism",
  siteUrl: process.env.SITE_URL,
  siteName: process.env.SITE_NAME,
  hostname: process.env.HOSTNAME,
  searchUrl: "",
  locale: "en_US",
  metaDescription: "Come join us to reduce recidivism in San Diego by connecting with inmates at Donovan Prison.",
  image: "",
  openGraph: {
    fbAppId: process.env.FB_APP_ID || "",
    image: "",
    imageDescription: "",
    imageHeight: "",
    imageWidth: "",
  },
  twitter: {
    site: "", // organization twitter
    creator: "", // content creator
    image: ""
  },
  schemaOrganization: {
    name: "Books Beyond Boundaries",
    url: "http://bbb.ucsd.edu",
    logo: "",
    street: "20281 Harville Ave.",
    city: "Perris",
    state: "CA",
    zip: "92115",
    country: "United States",
    email: "hello@automateyourbrand.com",
    description: "",
    foundingDate: "2018-09-01T00:00:00.000Z",
    sameAs: [ "https://facebook.com/bbbucsd" ],
    contacts: [
      {
        phone: "",
        type: "", // Example: "customer service" - Supported types https://developers.google.com/search/docs/data-types/corporate-contact
        areaServed: [ "" ], // Array or String - US, CA
      }
    ]
  },
  schemaPerson: {
    name: "Madeleine Hill",
    url: "http://bbb.ucsd.edu",
    image: "",
    sameAs: [ "https://facebook.com/bbbucsd" ],
  },
  prismicEndpoint: PrismicConfig.apiEndpoint,
});

module.exports = {
  siteMetadata: config,

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1B98CA`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Books Beyond Boundaries`,
        short_name: `BBB`,
        start_url: `/`,
        background_color: `#2D3B45`,
        theme_color: `#107BB0`,
        display: `minimal-ui`,
        icon: `static/images/icons/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/images/`
      }
    },
    {
      resolve: '@ericraio/gatsby-source-prismic',
      options: {
        repositoryName: PrismicConfig.prismicRepoName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    //{
      //resolve: `gatsby-plugin-offline`,
      //options: {
        //navigateFallbackWhitelist: [],
      //}
    //},
    // make sure to put last in the array
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};

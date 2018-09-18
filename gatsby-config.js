const PrismicConfig = require('./src/utils/prismicHelper');

var _ = require('lodash');

// dot env
if (process.env.NODE_ENV != 'production' || process.env.LOCAL_BUILD) {
  require('dotenv').config({
    path: `.env`,
  })
};

var config = _.cloneDeep({
  title: "Automate Your Brand: Helping You Grow an Automated Business",
  siteUrl: process.env.SITE_URL,
  siteName: process.env.SITE_NAME,
  hostname: process.env.HOSTNAME,
  searchUrl: "",
  locale: "en_US",
  metaDescription: "Learn how to automate the way you make money for your business. Free articles, guides, courses, and more for online business owners.",
  image: "",
  openGraph: {
    fbAppId: process.env.FB_APP_ID || "",
    image: "",
    imageDescription: "",
    imageHeight: "",
    imageWidth: "",
  },
  twitter: {
    site: "EricRaio", // organization twitter
    creator: "EricRaio", // content creator
    image: ""
  },
  schemaOrganization: {
    name: "Automate Your Brand",
    url: "https://automateyourbrand.com",
    logo: "",
    street: "20281 Harville Ave.",
    city: "Perris",
    state: "CA",
    zip: "92115",
    country: "United States",
    email: "hello@automateyourbrand.com",
    description: "",
    foundingDate: "2018-09-01T00:00:00.000Z",
    sameAs: [ "https://facebook.com/AutomateYourBrand", "https://twitter.com/EricRaio", "https://linkedin.com/in/ericraio", "https://instagram.com/ericraio" ],
    contacts: [
      {
        phone: "",
        type: "", // Example: "customer service" - Supported types https://developers.google.com/search/docs/data-types/corporate-contact
        areaServed: [ "" ], // Array or String - US, CA
      }
    ]
  },
  schemaPerson: {
    name: "Eric Raio",
    url: "https://automateyourbrand.com",
    image: "",
    sameAs: [ "https://facebook.com/AutomateYourBrand", "https://twitter.com/EricRaio", "https://linkedin.com/in/ericraio", "https://instagram.com/ericraio" ],
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
        name: `Automate Your Brand`,
        short_name: `AYB`,
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

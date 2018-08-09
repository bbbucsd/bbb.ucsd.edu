const PrismicConfig = require('./src/utils/prismicHelper');

var _ = require('lodash');

// dot env
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config({
    path: `.env`,
  })
};



// Leave objects as defaults to disable meta data
var config = _.cloneDeep({
  title: " – " + process.env.SITE_NAME,
  siteUrl: process.env.SITE_URL,
  siteName: process.env.SITE_NAME,
  hostname: process.env.HOSTNAME,
  locale: "en_US",
  metaDescription: "",
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
    name: "",
    url: "",
    logo: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    description: "",
    foundingDate: "",
    sameAs: [ "" ],
    contacts: [
      {
        phone: "",
        type: "", // Example: "customer service" - Supported types https://developers.google.com/search/docs/data-types/corporate-contact
        areaServed: [ "" ], // Array or String - US, CA
      }
    ]
  },
  schemaPerson: {
    name: "",
    url: "",
    image: "",
    sameAs: [ "" ]
  },
  prismicEndpoint: PrismicConfig.apiEndpoint,
});

module.exports = {
  siteMetadata: config,

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-next',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: PrismicConfig.prismicRepoName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different link resolver logic for each field if necessary.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node, key, value }) => doc => {
          return PrismicConfig.linkResolver(doc);
        },
      },
    },
    'gatsby-plugin-netlify', // make sure to keep this last in the array
  ],

};

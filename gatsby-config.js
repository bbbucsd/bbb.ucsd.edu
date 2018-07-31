var _ = require('lodash');
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
    sameAs: [ "" ]
  },
  schemaPerson: {
    name: "",
    url: "",
    image: "",
    sameAs: [ "" ]
  }
});

module.exports = {
  siteMetadata: config,

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: true,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      }
    },
  ],

};

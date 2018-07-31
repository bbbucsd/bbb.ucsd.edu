const PrismicConfig = require('./prismic-config');
var _ = require('lodash');

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config({
    path: `.env`,
  })
};

var config = _.cloneDeep({
  hostname: process.env.HOSTNAME,
  title: process.env.SITE_NAME,
  siteUrl: process.env.SITE_URL,
  prismicEndpoint: `${PrismicConfig.apiEndpoint}`,
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
        repositoryName: PrismicConfig.prismicRepoName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      }
    },
  ],

};

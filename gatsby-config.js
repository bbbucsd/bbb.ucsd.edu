if (process.env.NODE_ENV != 'production') {
  require('dotenv').config({
    path: `.env`,
  })
};

module.exports = {
  siteMetadata: {
    title: process.env.SITE_NAME,
    siteUrl: process.env.SITE_URL,
  },

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

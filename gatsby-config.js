if (process.env.NODE_ENV != 'production') {
  require('dotenv').config({
    path: `.env`,
  })
};

let contentful = {
  development: {
    host: 'preview.contentful.com',
    environment: process.env.CONTENTFUL_ENV,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  production: {
    environment: process.env.CONTENTFUL_ENV,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  }
};

module.exports = {
  siteMetadata: {
    title: process.env.SITE_NAME,
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    { resolve: `gatsby-source-contentful`,
      options: contentful[process.env.NODE_ENV]
    },
  ],
}

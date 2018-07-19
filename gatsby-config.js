module.exports = {
  siteMetadata: {
    title: 'Proluxe',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    { resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gnsce56rxh9g`,
        accessToken: `ccc931b8962aaf1635e10877061354e15b395633965c4cbc2466fe49a5ccf343`,
      },
    },
  ],
}

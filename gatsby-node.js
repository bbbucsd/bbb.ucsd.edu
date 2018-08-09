const path = require(`path`);
const PrismicHelper = require('./src/utils/prismicHelper');

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createRedirect, createPage } = boundActionCreators

  //
  // Pages ---------------------------------------------------------------------
  //

  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const pageComponent = path.resolve(`./src/templates/Page.js`)
  pages.data.allPrismicPage.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: pageComponent,
      context: {
        uid: edge.node.uid
      },
    })
  })

  //
  // Modals --------------------------------------------------------------------
  //

  const modals = await graphql(`
    {
      allPrismicModal {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const modalComponent = path.resolve(`./src/templates/Modal.js`)
  modals.data.allPrismicModal.edges.forEach(edge => {
    createPage({
      path: `_${edge.node.uid}`,
      component: modalComponent,
      context: {
        uid: edge.node.uid
      },
    })
  })

  //
  // Redirect ---------------------------------------------------------------------
  //

  const redirects = await graphql(`
    {
      allPrismicRedirect(filter: {uid: {eq: "redirect"}}) {
        edges {
          node {
            data {
              redirects {
                type
                from
                to
              }
            }
          }
        }
      }
    }
  `)

  const interstitialComponent = path.resolve(`./src/templates/Interstitial.js`);
  (redirects.data.allPrismicRedirect.edges[0].node.data.redirects || []).forEach(redirect => {
    switch (redirect.type) {
      case 'Permanent':
        createRedirect({
          fromPath: redirect.from,
          isPermanent: true,
          redirectInBrowser: false,
          toPath: redirect.to,
        })
        break;
      case 'Temporary':
        createRedirect({
          fromPath: redirect.from,
          isPermanent: false,
          redirectInBrowser: false,
          toPath: redirect.to,
        })
        break;
      case 'Browser':
        createRedirect({
          fromPath: redirect.from,
          isPermanent: false,
          redirectInBrowser: true,
          toPath: redirect.to,
        })
        break;
      case 'Interstitial':
        createPage({
          path: redirect.from,
          component: interstitialComponent ,
          context: {
            to: redirect.to
          },
        })
        break;
    }
  })
}


exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat([['babel-plugin-styled-components', { ssr: true }]]),
})

const path = require(`path`);
const PrismicHelper = require('./src/utils/prismicHelper');

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createRedirect, createPage } = boundActionCreators

  //
  // Home Page ---------------------------------------------------------------------
  //

  const home = await graphql(`
    {
      allHomePage {
        edges {
          node {
            type
            uid
          }
        }
      }
    }
  `)

  const homeComponent = path.resolve(`./src/templates/Home.js`)
  home.data.allHomePage.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: homeComponent,
    })
  })

  //
  // Category ---------------------------------------------------------------------
  //

  const category = await graphql(`
    {
      allCategory {
        edges {
          node {
            type
            uid
          }
        }
      }
    }
  `)

  const categoryComponent = path.resolve(`./src/templates/Category.js`)
  category.data.allCategory.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: categoryComponent,
      context: {
        uid: edge.node.uid
      },
    })
  })

  //
  // Product ---------------------------------------------------------------------
  //

  const products = await graphql(`
    {
      allProduct {
        edges {
          node {
            type
            uid
            data {
              category {
                document {
                  uid
                }
              }
            }
          }
        }
      }
    }
  `)

  const productComponent = path.resolve(`./src/templates/Product.js`)
  products.data.allProduct.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: productComponent,
      context: {
        uid: edge.node.uid
      },
    })
  })

  //
  // Industry ---------------------------------------------------------------------
  //

  const industry = await graphql(`
    {
      allIndustry {
        edges {
          node {
            type
            uid
          }
        }
      }
    }
  `)

  const industryComponent = path.resolve(`./src/templates/Industry.js`)
  industry.data.allIndustry.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: industryComponent,
      context: {
        uid: edge.node.uid
      },
    })
  })

  //
  // Pages ---------------------------------------------------------------------
  //

  const pages = await graphql(`
    {
      allPage {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
    }
  `)

  const pageComponent = path.resolve(`./src/templates/Page.js`)
  pages.data.allPage.edges.forEach(edge => {
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
      allModal {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
    }
  `)

  const modalComponent = path.resolve(`./src/templates/Modal.js`)
  modals.data.allModal.edges.forEach(edge => {
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
      allRedirect(filter: {uid: {eq: "redirect"}}) {
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
  (redirects.data.allRedirect.edges[0].node.data.redirects || []).forEach(redirect => {
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

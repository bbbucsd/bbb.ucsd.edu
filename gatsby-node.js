const path = require(`path`)

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

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
            data {
              path
            }
          }
        }
      }
    }
  `)

  const pageComponent = path.resolve(`./src/templates/Page.js`)
  pages.data.allPrismicPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.data.path}`,
      component: pageComponent,
      context: {
        id: edge.node.id
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
        id: edge.node.id
      },
    })
  })
}

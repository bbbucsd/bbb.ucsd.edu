const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

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

    //const pageTemplates = {
    //'Light': path.resolve('./src/templates/light.js'),
    //'Dark': path.resolve('./src/templates/dark.js'),
    //}
    //component: pageTemplates[edge.node.template],

    const pageComponent = path.resolve(`./src/templates/Page.js`)
    pages.data.allPrismicPage.edges.forEach(edge => {
      createPage({
        path: `${edge.node.data.path}`,
        component: slash(pageComponent),
        context: {
          id: edge.node.id
        },
      })
    })
}

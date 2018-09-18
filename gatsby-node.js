const path = require(`path`);
const PrismicHelper = require('./src/utils/prismicHelper');
var webpack = require('webpack');
require('core-js');
require('isomorphic-fetch');

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  //
  // Category ---------------------------------------------------------------------
  //

  const category = await graphql(`
    {
      allCategory {
        edges {
          node {
            id
            uid
            type
            data {
              parent {
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
  // Posts ----------------------------------------------------------------
  //

  const posts = await graphql(`
    {
      allPost {
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


  const postComponent = path.resolve(`./src/templates/Post.js`)
  posts.data.allPost.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: postComponent,
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
            data {
              parent {
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

}

exports.onCreateBabelConfig = ({ stage, actions }, pluginOptions) => {
  actions.setBabelPlugin({
    name: `babel-plugin-styled-components`,
    stage,
    options: {
      ...pluginOptions,
      ssr: stage === `build-html`,
    },
  })
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  })
}

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });

  actions.setWebpackConfig({
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BRANCH: JSON.stringify(process.env.BRANCH ? process.env.BRANCH : 'production')
        }
      })
    ],
  });
}

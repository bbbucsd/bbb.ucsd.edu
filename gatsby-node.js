const path = require(`path`);
const PrismicHelper = require('./src/utils/prismicHelper');

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createRedirect, createPage } = boundActionCreators

  //
  // Product Category ---------------------------------------------------------------------
  //

  const productCategory = await graphql(`
    {
      allProductCategory {
        edges {
          node {
            type
            uid
          }
        }
      }
    }
  `)

  const productCategoryComponent = path.resolve(`./src/templates/ProductCategory.js`)
  productCategory.data.allProductCategory.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: productCategoryComponent,
      context: {
        uid: edge.node.uid
      },
    })
  })

  //
  // Products --------------------------------------------------------------------
  //

  const products = await graphql(`
    {
      allProduct {
        edges {
          node {
            type
            uid
            data {
              product_category {
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
  // Testimonials ----------------------------------------------------------------
  //

  // TODO: This is a data-only type, doesnt need to build a page & route for it
  // TODO: (cont) the data should be pulled in from a UI slice

  // const testimonial = await graphql(`
  //   {
  //     allTestimonial {
  //       edges {
  //         node {
  //           type
  //         }
  //       }
  //     }
  //   }
  // `)
  //
  // const testimonialComponent = path.resolve(`./src/templates/Testimonial.js`)
  // testimonial.data.allTestimonial.edges.forEach(edge => {
  //   createPage({
  //     path: PrismicHelper.pathResolver(edge.node),
  //     component: testimonialComponent,
  //     context: {
  //       uid: edge.node.uid
  //     },
  //   })
  // })

  //
  // Post Category ---------------------------------------------------------------------
  //

  const postCategory = await graphql(`
    {
      allPostCategory {
        edges {
          node {
            type
            uid
          }
        }
      }
    }
  `)

  const postCategoryComponent = path.resolve(`./src/templates/PostCategory.js`)
  postCategory.data.allPostCategory.edges.forEach(edge => {
    createPage({
      path: PrismicHelper.pathResolver(edge.node),
      component: postCategoryComponent,
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
              post_category {
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

  const redirect = await graphql(`
    {
      redirect(uid: { eq: "redirect"}) {
        data {
          redirects {
            to
            from
            type
          }
        }
      }
    }
  `)

  const interstitialComponent = path.resolve(`./src/templates/Interstitial.js`);
  (redirect.data.redirects || []).forEach(redirect => {
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

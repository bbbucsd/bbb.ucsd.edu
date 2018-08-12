
const prismicRepoName = 'proluxe';

var Prismic = require('prismic-javascript');
var Cookies = require('js-cookie');

module.exports = {

  prismicRepoName: prismicRepoName,
  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  pathResolver(doc) {
    switch (doc.type) {
      case 'page':
        if(doc.uid === 'home') {
          return `/`
        } else {
          return `/${doc.uid}`
        }
      case 'industry':
        return `/industries/${doc.uid}`
      case 'category':
        return `/${doc.uid}`
      case 'testimonial':
        return `/testimonials/${doc.uid}`
      case 'product':
        doc.data.product_category === null ? console.log(`Product '${doc.uid}' is missing a category `) : null
        return `/${(doc.data.product_category && doc.data.product_category.document[0].uid) || 'products'}/${doc.uid}`
      case 'post':
        doc.data.post_category === null ? console.log(`Post '${doc.uid}' is missing a category `) : null
        return `/posts/${(doc.data.post_category && doc.data.post_category.document[0].uid)}/${doc.uid}`
      default:
        return '/404';
    }
  },

  // -- Links Resolver
  // This function will be used to generate links to Prismic documents
  linkResolver(doc) {
    switch(doc.type) {
      case 'page':
        return 'page://' + module.exports.pathResolver(doc);
      case 'modal':
        return 'modal://' + module.exports.pathResolver(doc);
      default:
        return doc.url || '/'
    }
  },

  previewData(selector, value, callback) {
    // Check for a preview cookie
    const previewCookie = Cookies.get(Prismic.previewCookie);
    // Retrieve preview content if cookie is set
    if (previewCookie !== undefined) {
      Prismic.api(module.exports.apiEndpoint).then(api => {
        api.query(
          Prismic.Predicates.at(selector, value),
          { ref : previewCookie }
        ).then((response) => {
          // response is the response object, response.results holds the documents
          var document = response.results[0]
          if (document) {
            return callback(document)
          }
        });
      });
    }
  },



};
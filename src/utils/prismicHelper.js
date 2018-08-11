
const prismicRepoName = 'proluxe';

var Prismic = require('prismic-javascript');
var Cookies = require('js-cookie');

module.exports = {

  prismicRepoName: prismicRepoName,
  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  convertUIDTOPath(uid) {
    return uid.replace(/\./g, '/')
  },

  pathResolver(doc) {
    switch (doc.type) {
      case 'home_page':
        return '/'
      case 'industry':
        return `/industries/${doc.uid}`
      case 'category':
        return `/${doc.uid}`
      case 'testimonial':
        return `/testimonials/${doc.uid}`
      case 'product':
        doc.data.category === null ? console.log(`Product '${doc.uid}' is missing a category `) : null
        return `/${(doc.data.category && doc.data.category.document[0].uid) || 'products'}/${doc.uid}`
      case 'post':
        doc.data.category === null ? console.log(`Post '${doc.uid}' is missing a category `) : null
        return `/${(doc.data.category && doc.data.category.document[0].uid) || 'posts'}/${doc.uid}`
      default:
        return module.exports.convertUIDTOPath(doc.uid)
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
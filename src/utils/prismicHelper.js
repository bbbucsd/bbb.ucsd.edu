const prismicRepoName = 'books-beyond-boundaries';

var Prismic = require('prismic-javascript');
var Cookies = require('js-cookie');
var _ = require('lodash');

module.exports = {

  prismicRepoName: prismicRepoName,
  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  pathResolver(doc) {
    const slug = doc.uid || doc.slug;
    switch (doc.type) {
      case 'page':
        if(doc.uid === 'home') {
          return `/`
        } else {
          if (doc.data && doc.data.parent) {
            return `${(doc.data.parent && doc.data.parent.document && doc.data.parent.document[0].uid && '/' + doc.data.parent.document[0].uid)}/${doc.uid}`;
          } else {
            return `/${slug}`;
          }
        }
      case 'category':
        return `/${slug}`;
      case 'testimonial':
        return `/testimonials/${slug}`;
      case 'post':
      case 'product':
        return `/${(doc.data.category && doc.data.category.document[0].uid) || 'uncategorized'}/${slug}`
      case 'modal':
        return slug;
      default:
        return '/404';
    }
  },

  // -- Links Resolver
  // This function will be used to generate links to Prismic documents
  linkResolver(linkDoc) {
    let doc;

    if (linkDoc.url) {
      return linkDoc.url || '/'
    }

    if (linkDoc.raw && !linkDoc.document) {
      doc = linkDoc.raw
      doc.type = doc.type || _.snakeCase(doc.__typename);
    }

    if (linkDoc.document && linkDoc.document.length) {
      doc = linkDoc.document[0];
      doc.type = doc.type || _.snakeCase(doc.__typename);
    }

    if (doc.type === 'modal') {
      return 'modal://' + this.pathResolver(doc);
    } else {
      return this.pathResolver(doc);
    }
  },

  previewData(selector, value, callback) {
    // Check for a preview cookie
    const previewCookie = Cookies.get(Prismic.previewCookie);
    // Retrieve preview content if cookie is set
    if (previewCookie !== undefined) {
      Prismic.api(this.apiEndpoint).then(api => {
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

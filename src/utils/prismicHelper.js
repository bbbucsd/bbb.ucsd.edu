const prismicRepoName = 'books-beyond-boundaries';

var Prismic = require('prismic-javascript');
var Cookies = require('js-cookie');
var _ = require('lodash');
var titlize = require('./titlize');
require('es6-promise').polyfill();

module.exports = {

  prismicRepoName: prismicRepoName,
  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  pathResolver(doc) {
    const slug = doc.uid || doc.slug;
    doc.type = doc.type || _.snakeCase(doc.__typename);
    switch (doc.type) {
      case 'page':
      case 'category':
        if(doc.uid === 'home') {
          return `/`
        } else {
          if (doc.data && doc.data.parent && doc.data.parent.document) {
            return `${(doc.data.parent.document[0].uid && '/' + doc.data.parent.document[0].uid)}/${doc.uid}`;
          } else if(doc.data && doc.data.parent && doc.data.parent.slug) {
            return `/${doc.data.parent.slug}/${doc.uid}`;
          } else {
            return `/${slug}`;
          }
        }
      case 'landing_page':
        return `/l/${slug}`;
      case 'post':
        //case 'product':
        if (doc.data) {
          return `/${(doc.data.category && doc.data.category.document[0].uid) || 'uncategorized'}/${slug}`;
        } else {
          return '#';
        }
      case 'modal':
        return slug;
      default:
        return '/404';
    }
  },

  extractNameFromURL(url) {
    return titlize(decodeURIComponent((url.split("_").length > 1 ? url.split("_")[1] : url.split("_")[0]).split(".")[0]).replace(/[^A-Za-z0-9 ]/, " ").replace(/\+/g, " "));
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

    if (linkDoc.document) {
      if(linkDoc.document.length) {
        doc = linkDoc.document[0];
      } else {
        doc = linkDoc.document;
      }
    }

    if (linkDoc.type && !linkDoc.document) {
      doc = linkDoc;
    }

    if (doc) {
      doc.type = doc.type || _.snakeCase(doc.__typename);

      if (doc.type === 'modal') {
        return 'modal://' + this.pathResolver(doc);
      } else {
        return this.pathResolver(doc);
      }
    } else {
      return this.pathResolver(linkDoc);
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

  query(type, uid) {
    return new Promise((resolve, reject) => {
      Prismic.api(this.apiEndpoint).then(api => {
        api.getByUID(type, uid).then(function(document) {
          resolve(document);
        });
      });
    });
  },

  // -- Toolbar Refresh
  // This function will be used to refresh the Prismic Toolbar
  refreshToolbar() {
    if (typeof window === "undefined") { return; }
    this.waitForGlobal('PrismicToolbar').then(() => {
      if (window.PrismicToolbar) {
        window.PrismicToolbar.setup(exports.apiEndpoint);
        window.PrismicToolbar.setupEditButton();
      }
    });
  },

  // -- Wait for Global
  // This function will be used to wait for javascript libraries to load in the window
  waitForGlobal(name, timeout = 300) {
    return new Promise((resolve, reject) => {
      let waited = 0

      function wait(interval) {
        setTimeout(() => {
          waited += interval

          // Check if script is loaded
          if (window[name] !== undefined) {
            return resolve()
          }
          if (waited >= timeout * 1000) {
            return reject({ message: 'Timeout' })
          }
          wait(interval * 2)
        }, interval)
      }

      wait(30)
    })
  },
};

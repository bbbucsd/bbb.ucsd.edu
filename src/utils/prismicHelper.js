
const prismicRepoName = 'proluxe';

module.exports = {

  prismicRepoName: prismicRepoName,

  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  convertUIDTOPath(uid) {
    return uid.replace('home', '').replace('--', '/').replace('.', '/')
  },

  pathResolver(doc) {
    return module.exports.convertUIDTOPath(doc.uid)
  },

  // -- Links Resolver
  // This function will be used to generate links to Prismic documents
  linkResolver(doc) {
    switch(doc.type) {
      case 'page':
        return 'path://' + module.exports.pathResolver(doc);
      case 'modal':
        return 'modal://' + module.exports.pathResolver(doc);
      default:
        return doc.url || '#'
    }
  },

};
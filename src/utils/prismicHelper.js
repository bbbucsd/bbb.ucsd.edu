const prismicRepoName = 'automate-your-brand';

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
        return 'page://' + module.exports.pathResolver(doc);
      case 'modal':
        return 'modal://' + module.exports.pathResolver(doc);
      default:
        return doc.url || '/'
    }
  },

};

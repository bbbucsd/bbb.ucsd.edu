
const prismicRepoName = 'proluxe';

module.exports = {

  prismicRepoName: prismicRepoName,

  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  // -- Links Resolver
  // This function will be used to generate links to Prismic documents
  linkResolver(doc) {
    var path;

    if (doc.type === 'page') {
      path = doc.uid.replace('home', '').replace('--', '/').replace('.', '/')
      return 'path://' + path;
    }

    if (doc.type === 'modal') {
      path = doc.uid.replace('--', '/').replace('.', '/')
      return 'modal://' + path;
    }

    return doc.url || '#';
  }
};
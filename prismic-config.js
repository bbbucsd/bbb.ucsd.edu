
const prismicRepoName = 'automate-your-brand';

module.exports = {

  prismicRepoName: prismicRepoName,

  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  // -- Links Resolver
  // This function will be used to generate links to Prismic documents
  linkResolver(doc) {
    return doc.data.path;
  }
};

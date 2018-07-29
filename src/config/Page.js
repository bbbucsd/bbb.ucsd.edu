class PageConfig {
}

export default PageConfig;

export const query = graphql`
  fragment PageConfig on PrismicPageConfig {
    data {
      site_title
      meta_keywords
      meta_description
      meta_robots_advanced
      display_in_search_results
      body {
        ... on PrismicPageConfigBodyOpenGraph {
          slice_type
          primary {
            open_graph_title
            open_graph_description
            open_graph_image {
              url
            }
            open_graph_image_description
          }
          items {
            open_graph_locale_alternate
          }
        }
      }
    }
  }
`;

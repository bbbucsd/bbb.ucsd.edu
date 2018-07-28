import './OpenGraph';
import './Twitter';
import './SchemaPerson';

export const query = graphql`
  fragment Meta on PrismicPage {
    data {
      site_title
      meta_description
      display_in_search_results

      body2 {
        ...OpenGraph
        ...Twitter
        ...SchemaPerson
      }
    }
  }
`;

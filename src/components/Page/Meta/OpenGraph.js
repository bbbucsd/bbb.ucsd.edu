export const query = graphql`
  fragment OpenGraph on PrismicPageBody2OpenGraph {
    slice_type
    primary {
      open_graph_title
      open_graph_description
    }
  }
`;

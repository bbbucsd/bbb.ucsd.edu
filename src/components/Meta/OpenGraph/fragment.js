export const Fragment = graphql`
  fragment MetaOpenGraphFields on PrismicPageBody2OpenGraph {
    primary {
      open_graph_title
      open_graph_description
      open_graph_image {
        url
      }
      open_graph_image_description
    }
  }
`
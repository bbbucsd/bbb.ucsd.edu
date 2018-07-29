export const query = graphql`
  fragment Twitter on PrismicPageBody2Twitter {
    slice_type
    primary {
      twitter_title
      twitter_description
    }
  }
`;

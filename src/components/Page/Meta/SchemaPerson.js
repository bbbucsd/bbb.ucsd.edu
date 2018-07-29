export const query = graphql`
  fragment SchemaPerson on PrismicPageBody2SchemaPerson {
    slice_type
    primary {
      schema_person_url {
        url
      }
      schema_person_name
    }
  }
`;

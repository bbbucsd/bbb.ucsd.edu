import React, { Component } from 'react';
import Config from 'config';
import FrontMatter from './FrontMatter'
import OpenGraph from './OpenGraph';
import SchemaOrganization from './SchemaOrganization';
import SchemaPerson from './SchemaPerson';
// TODO: Implement dummy data on prismic
// import Twitter from './Twitter';


class Meta extends Component {

  render() {
    const page = this.props.page;
    const tags = page.tags;
    const slices = page.data.body2;

    return (
      <div>
        <FrontMatter data={page} />
        <OpenGraph tags={tags} slices={slices} />
        <SchemaOrganization slices={slices} />
        <SchemaPerson slices={slices} />
      </div>
    )
  }
}


export default Meta;


// TODO: Add the following (below) to body2 once dummy data is implemented
// ...Twitter
export const query = graphql`
  fragment Meta on PrismicPage {
    data {
      site_title
      meta_description
      follow_links
      display_in_search_results
      meta_robots_advanced
      canonical_url {
        url
      }

      body2 {
        ...OpenGraph
        ...Twitter
        ...SchemaOrganization
        ...SchemaPerson
      }
    }
  }
`;

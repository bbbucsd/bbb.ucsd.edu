import React, { Component } from 'react';
import Config from '../../../../config';
import FrontMatter from './FrontMatter'
import OpenGraph from './OpenGraph';
// TODO: Implement dummy data on prismic
// import Twitter from './Twitter';
//import SchemaPerson from './SchemaPerson';



class Meta extends Component {

  render() {
    const page = this.props.page;
    const tags = page.tags;
    const slices = page.data.body2;
        //<SchemaPerson key={`slice_${index}`} data={slice} />
        //<FrontMatter data={page} />

    return (
      <div>
        <OpenGraph tags={tags} slices={slices} />
      </div>
    )
  }
}


export default Meta;


// TODO: Add the following (below) to body2 once dummy data is implemented
// ...Twitter
// ...SchemaPerson
export const query = graphql`
  fragment Meta on PrismicPage {
    data {
      site_title
      meta_description
      display_in_search_results

      body2 {
        ...OpenGraph
      }
    }
  }
`;

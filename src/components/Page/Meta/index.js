import React, { Component } from 'react';
import FrontMatter from './FrontMatter'
import OpenGraph from './OpenGraph';

// TODO: Implement dummy data on prismic
// import Twitter from './Twitter';

// TODO: Implement dummy data on prismic
// import SchemaPerson from './SchemaPerson';

class Meta extends Component {

  renderSlice(slice, index) {
    console.log(slice)
    switch (slice.__typename) {
      case 'PrismicPageBody2OpenGraph':
        return <OpenGraph key={`slice_${index}`} data={slice} />
      //case 'PrismicPageBody2SchemaPerson':
        //return <SchemaPerson key={`slice_${index}`} data={slice} />
    }
  }

  render() {
    const page = this.props.data;
    const { body2 } = page
    console.log(page)
    console.log(body2)

    return (
      <div>
        <FrontMatter data={page} />
        {( body2 || [] ).map((slice, i) => this.renderSlice(slice, i) )}
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
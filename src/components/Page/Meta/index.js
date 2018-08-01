import React, { Component } from 'react';
import Config from 'config';
import FrontMatter from './FrontMatter'
import OpenGraph from './OpenGraph';
import Twitter from './Twitter';
import SchemaOrganization from './SchemaOrganization';
import SchemaPerson from './SchemaPerson';
import SchemaArticle from './SchemaArticle';
import SchemaWebpage from './SchemaWebpage';
import SchemaProduct from './SchemaProduct';
import SchemaWebsite from './SchemaWebsite';
import SchemaItemList from './SchemaItemList';

class Meta extends Component {
  renderSlice(slice, page, index) {
    switch (slice.slice_type) {
      case 'schema___webpage':
        return <SchemaWebpage key={`slice_${index}`} page={page} slice={slice} />
      case 'schema___product':
        return <SchemaProduct key={`slice_${index}`} slice={slice} />
      case 'schema___article':
        return <SchemaArticle key={`slice_${index}`} page={page} slice={slice} />
      case 'schema___webpage':
        return <SchemaWebpage key={`slice_${index}`} page={page} slice={slice} />
      case 'schema___website':
        return <SchemaWebsite key={`slice_${index}`} page={page} slice={slice} />
      case 'schema___item_list':
        return <SchemaItemList key={`slice_${index}`} slice={slice} />
    };
  }

  render() {
    const page = this.props.page;
    const tags = this.props.tags;
    const slices = page.body2;

    return (
      <div>
        <FrontMatter data={page} />
        <OpenGraph tags={tags} slices={slices} />
        <Twitter slices={slices} />
        <SchemaOrganization slices={slices} />
        <SchemaPerson slices={slices} />
        {( slices || [] ).map((slice, i) => this.renderSlice(slice, page, i) )}
      </div>
    )
  }
}


export default Meta;

export const query = graphql`
  fragment Meta on PrismicPage {
    data {
      name {
        text
      }
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
        ...SchemaProduct
        ...SchemaArticle
        ...SchemaWebpage
        ...SchemaWebsite
        ...SchemaItemList
      }
    }
  }
`;

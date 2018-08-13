import React, { Component } from 'react';


class Checkboxes extends Component {
  render() {
    const { slice } = this.props;
    const items = slice.items;

    return (
      <div>
        {( items || [] ).map((item) =>
          <div>
            <input type="checkbox" value={item.field_name} /> <label>{item.label}</label>
          </div>
        )}
      </div>
    )
  }
}

export default Checkboxes;

export const query = graphql`
  fragment Checkboxes on Checkboxes {
    __typename
    items {
      label
      field_name
    }
  }
`;

import React, { Component } from 'react';


class TextArea extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <div>
        <label>{data.label}</label>
        <textarea name={data.field_name} />
      </div>
    )
  }
}

export default TextArea;

export const query = graphql`
  fragment TextArea on TextArea {
    __typename
    primary {
      label
      field_name
    }
  }
`;

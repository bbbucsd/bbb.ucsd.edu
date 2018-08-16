import React, { Component } from 'react';


class TextField extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <div>
        <label>{data.label}</label>
        <input type="text" name={data.field_name} />
      </div>
    )
  }
}

export default TextField;

export const query = graphql`
  fragment TextField on TextField {
    __typename
    primary {
      label
      field_name
    }
  }
`;
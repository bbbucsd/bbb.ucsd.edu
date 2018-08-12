import React, { Component } from 'react';


class TextField extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <div>
        <label>{data.name}</label>
        <input type="text" name={data.name} />
      </div>
    )
  }
}

export default TextField;

export const query = graphql`
  fragment TextField on TextField {
    __typename
    primary {
      name
    }
  }
`;

import React, { Component } from 'react';
import SimplePage from './SimplePage';
import _ from 'lodash';

const Page = (props) => {
  let { data } = props

  var type = data.__typename || _.upperFirst(_.camelCase(data.slice_type));

  switch (type) {
    case 'SimplePage':
      return <SimplePage data={data} />

    default:
      return null;
  }; // eslint-disable-line no-unreachable
}

export default class LandingPage extends Component {
  render() {
    const { document } = this.props;
    const data = document.data && document.data.body && document.data.body[0];
    return (
      <Page data={data} />
    )
  }
}

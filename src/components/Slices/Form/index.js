import React, { Fragment, Component } from 'react';
import _ from 'lodash';
import TextField from './TextField';

const FormSlice = (props) => {
  let { data } = props

  var type = data.__typename || _.upperFirst(_.camelCase(data.slice_type))

  switch (type) {
    case 'TextField':
      return <TextField slice={data} />
    default:
      return null;
  };
}

class Form extends Component {

  render() {
    const { document } = this.props;
    console.log(document)

    return (
      <Fragment>
        {( document.data.body || [] ).map((slice, i) => <FormSlice data={slice} key={`ui_${i}`} /> )}
      </Fragment>
    )
  }
}

export default Form;



import React, { Fragment, Component } from 'react';
import _ from 'lodash';
import TextField from './TextField';
import TextArea from './TextArea';
import Checkboxes from './Checkboxes';

const FormSlice = (props) => {
  let { data } = props

  var type = data.__typename || _.upperFirst(_.camelCase(data.slice_type))

  switch (type) {
    case 'TextField':
      return <TextField slice={data} />
    case 'TextArea':
      return <TextArea slice={data} />
    case 'Checkboxes':
      return <Checkboxes slice={data} />
    default:
      return null;
  };
}

class Form extends Component {

  render() {
    const { document } = this.props;

    return (
      <Fragment>
        {( document.data.body || [] ).map((slice, i) => <FormSlice data={slice} key={`ui_${i}`} /> )}
      </Fragment>
    )
  }
}

export default Form;

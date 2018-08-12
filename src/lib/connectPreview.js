import React, { Component } from 'react';
import PrismicHelper from '../utils/prismicHelper';

export default function connectPreview(type) {
  if (!type) {
    throw new Error("Type such as 'page' or 'category' is not defined for Connect Preview");
  }

  return (BaseComponent) => {
    return class extends Component {
      constructor(props) {
        super(props);
        console.log(props)
        this.state = {
          document: props.data[type]
        };
      }

      componentWillMount() {
        PrismicHelper.previewData(`my.${type}.uid`, this.props.data[type].uid, (data) => {
          this.setState({ document: data });
        });
      }

      render() {
        return (
          <BaseComponent {...this.props} {...this.state} />
        );
      }
    }
  };
}

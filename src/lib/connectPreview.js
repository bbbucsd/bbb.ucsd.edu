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
        this.state = {
          type,
          document: props.data[type],
          isPreview: false
        };
      }

      static getDerivedStateFromProps(props, currentState) {
        if (currentState.isPreview) {
          return {
            isPreview: false,
            document: currentState.document
          };
        } else {
          return {
            document: props.data[currentState.type]
          };
        }
      }

      componentDidMount() {
        PrismicHelper.previewData(`my.${type}.uid`, this.props.data[type].uid, (document) => {
          this.setState({ document, isPreview: true });
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

import React, { Component } from 'react';
import style from './style.module.scss'
import RichText from 'components/Theme/Typography/RichText'


class ContentBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <div className={style.content}>
        <RichText body={ data.content } />
      </div>
    )
  }
}

export default ContentBlock;

export const query = graphql`
  fragment ContentBlock on PrismicPageBodyContentBlock {
    slice_type
    primary {
      content {
        html
      }
    }
  }
`;

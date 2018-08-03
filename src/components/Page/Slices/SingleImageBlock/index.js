import React, { Component } from 'react';
import Block, { Section, RichText, Cta } from 'components/Elements/Block';

// Style
import style from './style.module.scss'

class SingleImageBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block className={style.block} reducedHeight={data.height && !!data.height.match(/Reduced/i)}>
        <Section src={data.asset.url} className={style.section}>
          <RichText color={data.content_color} body={data.content} />
          <Cta to={data.cta_link}>{data.cta_label}</Cta>
        </Section>
      </Block>
    )
  }
}

export default SingleImageBlock;

export const query = graphql`
  fragment SingleImageBlock on PrismicPageBodySingleimageblock {
    slice_type
    primary {
      height
      asset {
        url
      }
      content {
        html
      }
      content_color
      cta_label
      cta_link {
        url
      }
    }
  }
`;

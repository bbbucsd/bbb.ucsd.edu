import React, { Component } from 'react';
import Block, { Section, RichText, Cta } from 'components/Elements/Block';

// Style
import style from './style.module.scss'

class SingleImageBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block className={style.block} height={data.height}>
        <Section src={data.asset.url} className={style.section} paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
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
      inner_padding_top
      inner_padding_bottom
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

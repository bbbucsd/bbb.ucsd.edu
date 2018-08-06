import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Styles, { styled, css} from 'components/Theme/Styles';
import ThemeRichText from 'components/Theme/RichText'
import ThemeButton from 'components/Theme/Button';

const Row = styled(Block)`
  padding-left: ${props => props.theme.largePadding * 2}px;
  padding-right: ${props => props.theme.largePadding * 2}px;
`;

const RichText = styled(ThemeRichText)`
  color: ${props => props.color};
`;

const Button = styled(ThemeButton)`

`;

class SingleImageBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block height={data.height}>
        <Section background={{desktop: data.asset.url, mobile: data.asset.url}} paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
          <Row>
            <RichText color={data.content_color} body={data.content} />
            {data.cta_label &&
              <Button to={data.cta_link}>{data.cta_label}</Button>
            }
          </Row>
        </Section>
      </Block>
    )
  }
}

export default SingleImageBlock;

export const query = graphql`
  fragment SingleImageBlock on PrismicPageBodySingleImageBlock {
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

import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import ThemeHeadline from 'components/Theme/Headline'
import styled from 'styled-components';

const Headline = styled(ThemeHeadline)`
  font-size: 38px;
  line-height: 42px;
  padding:0;
  margin:0;
`;

const Subheadline = styled(ThemeHeadline)`
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0px;
`;

class DoubleBlock extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block direction={data.direction} height={data.height} paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>

        {/* Primary Section */}
        <Section background={{desktop: data.background_color, mobile: data.asset.url}}>
          <Headline h2 color={data.headline_color} text={data.headline} />
          <Subheadline h3 color={data.subheadline_color} text={data.subheadline} />
        </Section>

        {/* Secondary Section (Desktop only) */}
        <Section background={{desktop: data.asset.url}} hidden={{mobile: true}}></Section>

      </Block>
    )
  }
}

export default DoubleBlock;

export const query = graphql`
  fragment DoubleBlock on PrismicPageBodyDoubleBlock {
    slice_type
    primary {
      height
      inner_padding_top
      inner_padding_bottom
      direction
      background_color
      asset {
        url
      }
      headline {
        text
      }
      headline_color
      subheadline {
        text
      }
      subheadline_color
    }
  }
`;


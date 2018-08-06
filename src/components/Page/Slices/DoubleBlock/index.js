import React, { Component } from 'react';
import Block, { Section, Headline, Subheadline } from 'components/Elements/Block';
import Validator from 'utils/validator';
import styled, { css } from 'styled-components';
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);


class DoubleBlock extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block direction={data.direction} height={data.height} paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>

        {/* Primary Section */}
        <Section background={{desktop: data.background_color, mobile: data.asset.url}}>
          <Headline color={data.headline_color} text={data.headline} />
          <Subheadline color={data.subheadline_color} text={data.subheadline} />
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


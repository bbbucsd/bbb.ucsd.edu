import React, { Component } from 'react';
import Block, { Section, Headline, Subheadline } from 'components/Elements/Block';
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class DoubleBlock extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block direction={data.direction} className={style.block}>
        <Section backgroundColor={data.background_color}>
          <Headline color={data.headline_color}>{data.headline.text}</Headline>
          <Subheadline color={data.subheadline_color}>{data.subheadline.text}</Subheadline>
        </Section>

        <Section src={data.asset.url}></Section>
      </Block>
    )
  }
}

export default DoubleBlock;

export const query = graphql`
  fragment DoubleBlock on PrismicPageBodyDoubleBlock {
    primary {
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


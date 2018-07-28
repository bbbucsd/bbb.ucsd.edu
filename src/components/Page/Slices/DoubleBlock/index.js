import React, { Component } from 'react';

// Elements
import Block, { BlockContainer } from 'components/Elements/Block';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class DoubleBlock extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <BlockContainer direction={data.direction}>
        <Block backgroundColor={data.background_color}>
          <h2 className={style.subheadline}
              style={{ color: (data.headline_color || 'inherited')} }>{data.headline.text}</h2>

          <h3 className={cx({subheadline: true, secondaryHeadline: true})}
              style={{ color: (data.subheadline_color || 'inherited') }}>{data.subheadline.text}</h3>
        </Block>

        <Block src={data.asset.url}></Block>
      </BlockContainer>
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


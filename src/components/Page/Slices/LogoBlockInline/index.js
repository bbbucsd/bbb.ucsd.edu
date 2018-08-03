import React, { Component } from 'react';
import Block, { Section } from 'components/Elements/Block';

// Style
import style from './style.module.scss'

class LogoBlockInline extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const items = slice.items;

    return (
      <Block className={style.block} height={data.height}>
        <Section className={style.section} paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
          {items.map((item, i) => <img alt={item.logo.alt} src={item.logo.url} className={style.logo} />)}
        </Section>
      </Block>
    )
  }
}

export default LogoBlockInline;

export const query = graphql`
  fragment LogoBlockInline on PrismicPageBodyLogoBlockInline {
    slice_type
    primary {
      height
      inner_padding_top
      inner_padding_bottom
    }
    items {
      logo {
        url
      }
    }
  }
`;

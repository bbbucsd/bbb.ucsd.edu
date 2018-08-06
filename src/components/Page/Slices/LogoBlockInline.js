import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Styles, { styled, css} from 'components/Theme/Styles';

const Row = styled(Block)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  display: flex;
`;

const Logo = styled.img`
  width: 200px;
  justify-content: space-evenly;
  align-items: center;
`;

class LogoBlockInline extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const items = slice.items;

    return (
      <Block height={data.height}>
        <Row paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
          {items.map((item, i) => <Logo alt={item.logo.alt} src={item.logo.url} />)}
        </Row>
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

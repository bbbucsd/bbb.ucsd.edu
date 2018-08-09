import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Styles, { styled, css} from 'components/Theme/Styles';

const Logos = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;

const Logo = styled.img`
  justify-content: space-evenly;
  align-items: center;
`;

class LogoBlockInline extends Component {

  render() {
    const slice = this.props.slice
    const items = slice.items;

    const {
      height,
      align,
      justify
    } = slice.primary

    return (
      <Block height={height}>
        <Section align={align} justify={justify}>
          <Logos>
            {items.map((item, i) => <Logo alt={item.logo.alt} src={item.logo.url} />)}
          </Logos>
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
      align
      justify
    }
    items {
      logo {
        url
      }
    }
  }
`;

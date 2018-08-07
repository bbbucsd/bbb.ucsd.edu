import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import ThemeHeadline from 'components/Theme/Headline';
import ThemeButton from 'components/Theme/Button';
import { styled, css, media } from 'components/Theme/Styles';

const BlockWrapper = styled(Block)`
  text-align: center;
`;

const SectionWrapper = styled(Section)`
  ${media.lessThan("medium")`
    padding:20px
  `}
`;

const Headline = styled(ThemeHeadline)`
  font-weight: 200;
  font-style: normal;
  margin: 40px 0 80px 0;
  padding: 0;
  text-align: center;
  font-size: ${props => props.theme.h1FontSize / 1.2}px;
  
  ${media.lessThan("medium")`
    font-size: ${props => props.theme.h1FontSize / 1.7}px;
    margin: 20px 0 40px 0;
    font-weight: 300;
  `}
`;

const Customers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width:100%;
`;

const Customer = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  margin-bottom:20px;
  width:33%;
  
  & + & {
    border-left: 1px solid #ccc;
  }
  
  &:nth-child(4n) {
    border-left: none;
  }
  
  ${media.lessThan("medium")`
    width:50%;
    margin-bottom:0;
    & + & {
      border-left: none;
    }
  `}
`;

const Logo = styled.img`
  width: 120px;
  display: inline-block;
  margin: auto;
`;

const Button = styled(ThemeButton)`
  text-align: center;
  display:block;
  margin-top: 40px;
  margin-bottom: 40px;
`;

class LogoBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const items = slice.items;

    return (
      <BlockWrapper height={data.height}>
        <SectionWrapper>
          <Headline h2 text={data.headline} />

          <Customers>
            {items.map((item) =>
              <Customer>
                <Logo alt={item.logo.alt} src={item.logo.url} />
              </Customer>
            )}
          </Customers>

          <Button to={data.cta_link} onClick={this.handleClickOpen}>{data.cta_label}</Button>
        </SectionWrapper>
      </BlockWrapper>
    )
  }
}

export default LogoBlock;

// language=GraphQL
export const query = graphql`
  fragment LogoBlock on PrismicPageBodyLogoBlock {
    slice_type
    primary {
      height
      headline {
        text
      }
      cta_link {
        url
      }
      cta_label
    }
    items {
      logo {
        url
      }
    }
  }
`;

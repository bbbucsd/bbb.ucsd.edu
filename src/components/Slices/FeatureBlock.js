import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Styles, { styled, css, media } from 'components/Theme/Styles';
import ThemeButton from 'components/Theme/Button';
import ThemeHeadline from 'components/Theme/Headline';

const Container = styled.div`
  background-color: ${props => props.theme.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

const Feature = styled.div`
   text-align: center;
   max-width:300px;

   ${media.lessThan("medium")`
      &:nth-child(even) {
        margin:80px 0;
      }
   `}
`;

const Button = styled(ThemeButton)`
  ${media.lessThan("medium")`
    margin-top: 10px;
  `}

  ${media.greaterThan("medium")`
    margin-top: 30px;
  `}
`;

const Headline = styled(ThemeHeadline)`
  color: ${props => props.theme.black};
`;

const Subheadline = styled(ThemeHeadline)`
  color: ${props => props.theme.black};
`;

class FeatureBlock extends Component {

  render() {
    const { slice } = this.props;
    const {
      height,
      justify,
      align
    } = slice.primary
    const items = slice.items;

    return (
      <Block height={height}>
        <Section align={align} justify={justify}>
          <Container>
            {( items || [] ).map((item) =>
              <Feature>
                <img src={item.asset.url} />
                <Headline h2 text={item.headline} />
                <Subheadline h3 text={item.subheadline} />
                <Button small={true} arrow={false} to={item.cta_link && item.cta_link.url}>{item.cta_label}</Button>
              </Feature>
            )}
          </Container>
        </Section>
      </Block>
    )
  }
}

export default FeatureBlock;

export const query = graphql`
  fragment FeatureBlock on FeatureBlock {
    __typename
    primary {
      height
      justify
      align
    }
    items {
      asset {
        url
      }
      headline {
        text
      }
      subheadline {
        text
      }
      cta_label
      cta_link {
        url
        raw {
          type
          slug
        }
      }
    }
  }
`;


import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Block, { Section } from 'components/Theme/Block';
import { styled, media } from 'components/Theme/Styles';
import Link from 'components/Theme/Link';
import Icon from 'components/Theme/Icon';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
} from 'styled-bootstrap-components';

const FeaturesContainer = styled.div`
  background-color: ${props => props.theme.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

const Feature = styled.div`
   cursor: pointer;
   text-align: center;
   max-width:300px;

   ${media.lessThan("medium")`
      &:nth-child(even) {
        margin: 10px 0;
      }
   `}
`;

const FeatureCard = styled(Card)`
  background-color: ${p => p.backgroundColor} !Important;
  margin: 5px;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  border: 0;
  font-weight: 400;
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.05); z-index: 90; }
`;

const FeatureCardTitle = styled(CardTitle)`
  color: ${p => p.theme.white} !Important;
  font-family: ${p => p.subtitle ? p.theme.fontFamily : p.theme.fontFamilyTitle } !important;
  font-size: ${p => p.subtitle ? '16px' : '20px'} !important;
  text-align: left;
`;

const FeatureIcon = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 25px auto;
`;

class FeatureBlock extends Component {

  renderFeature(item) {
    return (
      <Link to={item.cta_link}>
        <Container>
          <FeatureCard width="18rem" backgroundColor={item.background_color}>
            <CardBody>
              {item.icon ? (
                <FeatureIcon name={item.icon} size="75" />
              ) : null}
              <FeatureCardTitle h5>
                {item.headline.text}
              </FeatureCardTitle>
              {item.subheadline && item.subheadline.text ? (
                <FeatureCardTitle h6 muted subtitle style={{ marginBottom: '0.5rem' }}>
                  {item.subheadline.text}
                </FeatureCardTitle>
              ) : null}
            </CardBody>
          </FeatureCard>
        </Container>
      </Link>
    );
  }

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
          <FeaturesContainer>
            {( items || [] ).map((item, index) =>
              <Feature key={`feature_${index}`}>
                {this.renderFeature(item)}
              </Feature>
            )}
          </FeaturesContainer>
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
      icon
      background_color
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
        document {
          ...Link
        }
      }
    }
  }
`;


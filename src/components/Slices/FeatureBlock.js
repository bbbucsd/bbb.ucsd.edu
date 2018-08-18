import React, { Fragment, Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Styles, { styled, css, media } from 'components/Theme/Styles';
import ThemeButton from 'components/Theme/Button';
import ThemeHeadline from 'components/Theme/Headline';
import Link from 'components/Theme/Link';
import Icon from 'components/Theme/Icon';
import {
  A,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageHeader,
  CardText,
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
   text-align: center;
   max-width:300px;

   ${media.lessThan("medium")`
      &:nth-child(even) {
        margin:80px 0;
      }
   `}
`;

const FeatureCard = styled(Card)`
  background-color: ${p => p.backgroundColor};
  margin: 5px;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  border: 0;
  font-weight: 400;
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.05); z-index: 100; }
`;

const FeatureCardTitle = styled(CardTitle)`
  color: ${p => p.theme.white};
  font-family: ${p => p.subtitle ? p.theme.fontFamily : p.theme.fontFamilyTitle };
  font-size: ${p => p.subtitle ? '18px' : '20px'};
  text-align: left;
`;

const FeatureIcon = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 25px auto;
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
  color: ${props => props.theme.white};
`;

const Subheadline = styled(ThemeHeadline)`
  color: ${props => props.theme.white};
`;

class FeatureBlock extends Component {

  renderFeature(item) {
    return (
      <Link to={item.cta_link}>
        <Container>
          <FeatureCard width="18rem" textAlign="left" backgroundColor={item.background_color}>
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
            {( items || [] ).map((item) =>
              <Feature>
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
        raw {
          type
          slug
        }
      }
    }
  }
`;


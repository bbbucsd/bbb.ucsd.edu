import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import Button from 'components/Theme/Button';
import ShortDivider from 'components/Theme/ShortDivider';
import { styled, media } from 'components/Theme/Styles';
import InnerHTML from 'utils/InnerHTML';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';

const FeatureImage = styled.img`
  max-height: 300px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  ${media.greaterThan('medium')`
    max-height: 450px;
    float: right;
  `}
  ${media.between('medium', 'large')`
    float: none;
    max-height: 450px;
  `}
`;

const FeatureContainer = styled(Container)`
  background-color: ${p => p.color};
  padding: 50px 0;
`;

const Headline = styled.h3`
  font-size: ${props => props.theme.h2FontSize}px;
  color: ${props => props.color || props.theme.black};
  font-family: ${p => p.theme.fontFamily};
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
`;

const Superheadline = styled.div`
  color: ${props => props.color || props.theme.black};
  font-family: ${p => p.theme.fontFamilyTitle};
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  text-transform: uppercase;
  ${media.greaterThan('small')`
    font-size: 30px;
    width: 50%;
  `}
`;

const Caption = styled.div`
  text-align: left;
  color: ${props => props.color || props.theme.black};
  h6 {
   font-size: 20px;
   font-weight: initial;
   margin: 0;
  }
  p {
   font-size: 13px;
  }
`;

const Primary = styled(Section)`
  & > div { width:80%; }
`;

const CTAButton = styled(Button)`
  float: left;
  margin-top: 15px;
  transform: initial;
  float: none;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  display: inline-block;
  button {
    text-align: center;
    width: 100%;
  }

  ${media.greaterThan('medium')`
    display: flex;
    button {
      text-align: center;
      width: initial;
    }
  `}
`;


class SingleFeatureBlock extends Component {
  render() {
    const { background_color,
            asset,
            caption,
            headline,
            headline_color,
            superheadline,
            superheadline_color,
            caption_color,
            cta_label,
            cta_link
    } = this.props.slice.primary

    return (
      <Block color={background_color}>
        <FeatureContainer color={background_color}>
          <Row>
            <Column lg={6}>
              <Superheadline color={superheadline_color}>{superheadline.text}</Superheadline>
              <Headline color={headline_color}>{headline.text}</Headline>
                <Caption color={caption_color}>
                  <InnerHTML>
                    {caption.html}
                  </InnerHTML>
                </Caption>
                {cta_label && cta_link &&
                  <CTAButton arrow={false} to={cta_link}>{cta_label}</CTAButton>
                }
              </Column>
              <Column lg={6}>
                <FeatureImage src={asset.url} />
              </Column>
            </Row>
          </FeatureContainer>
        </Block>
    );
  }
}

export default SingleFeatureBlock;

export const query = graphql`
  fragment SingleFeatureBlock on SingleFeatureBlock {
    __typename
    primary {
      height
      align
      justify
      background_color
      caption_color
      headline_color
      headline {
        text
      }
      superheadline_color
      superheadline {
        text
      }
      caption {
        html
      }
      asset {
        url
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

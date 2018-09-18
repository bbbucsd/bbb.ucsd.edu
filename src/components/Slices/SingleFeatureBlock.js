import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby'
import Block from 'components/Theme/Block';
import Link from 'components/Theme/Link';
import Text from 'components/Theme/Text';
import Button from 'components/Theme/Button';
import { styled, media } from 'components/Theme/Styles';
import InnerHTML from 'utils/InnerHTML';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';
import LazyLoad from 'react-lazyload';
import { isMobileOnly } from "react-device-detect";

const FeatureImage = styled.img`
  max-height: 300px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  display: flex;
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.05); z-index: 90; }

  ${media.greaterThan('medium')`
    max-height: 430px;
    float: right;
  `}
  ${media.between('medium', 'large')`
    float: none;
    max-height: 430px;
  `}
`;

const FeatureContainer = styled(Container)`
  background-color: ${p => p.color};
  padding: 50px 0;
`;

const Headline = styled.h3`
  color: ${props => props.color || props.theme.black};
  font-family: ${p => p.theme.fontFamily};
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
  ${media.greaterThan('small')`
    font-size: 35px;
  `}
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
  h5, h6 {
   font-size: 15px;
   font-weight: 100;
   margin: 0;
   margin-top: 5px;
  ${media.greaterThan('small')`
     font-size: 20px;
  `}
  }
  div, p {
   font-size: 15px;
   font-weight: 100;
  }
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
                {cta_link ? (
                  <Fragment>
                    <Link to={cta_link}>
                      <Superheadline color={superheadline_color}><Text body={superheadline} /></Superheadline>
                    </Link>
                    <Link to={cta_link}>
                      <Headline color={headline_color}><Text body={headline} /></Headline>
                    </Link>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Superheadline color={superheadline_color}><Text body={superheadline} /></Superheadline>
                    <Headline color={headline_color}><Text body={headline} /></Headline>
                  </Fragment>
                )}
              <Caption color={caption_color}>
                <InnerHTML html={caption} />
              </Caption>
              {cta_label && cta_link &&
                <CTAButton fullWidth={isMobileOnly} arrow={false} to={cta_link}>{cta_label}</CTAButton>
              }
            </Column>
            <Column lg={6}>
              <LazyLoad>
                {cta_link ? (
                  <Fragment>
                    <Link to={cta_link}>
                        <FeatureImage src={asset.url} />
                    </Link>
                  </Fragment>
                ) : (
                  <FeatureImage src={asset.url} />
                )}
              </LazyLoad>
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
        document {
          ...Link
        }
      }
    }
  }
`;

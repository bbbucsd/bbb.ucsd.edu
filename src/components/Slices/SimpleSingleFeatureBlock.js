import React, { Component } from 'react';
import { graphql } from 'gatsby';
import RichText from 'components/Theme/RichText';
import Text from 'components/Theme/Text';
import Link from 'components/Theme/Link';
import Button from 'components/Theme/Button';
import { styled, media } from 'components/Theme/Styles';
import { isMobileOnly } from "react-device-detect";
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';

const FeatureRow = styled(Row)`
  margin: 25px 0;
  ${p => p.borderTop && ('border-top: 1px solid ' + p.theme.brandSecondary + ';')}
  ${p => p.borderTop && ('padding-top: 25px;')}
  ${p => p.borderBottom && ('border-bottom: 1px solid ' + p.theme.brandSecondary + ';')}
  ${p => p.borderBottom && ('padding-bottom: 25px;')}
`;

const Title = styled.h3`
  font-size: 30px;
  color: ${p => p.theme.brandSecondary};
  font-family: ${p => p.theme.fontFamily};
  margin-bottom: 0;
  padding: 3px;
  display: inline;
`;

const Caption = styled.div`
  text-align: left;
  color: ${props => props.color || props.theme.black};
  h5, h6 {
   font-size: 1em;
   font-weight: 100;
   margin: 0;
   margin-top: 5px;
  ${media.greaterThan('small')`
     font-size: 20px;
  `}
  }
  div, p {
   font-size: 1em;
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
      width: 300px;
    }
  `}
`;


class SimpleSingleFeatureBlock extends Component {
  render() {
    const { slice } = this.props;
    const {
      border_top,
      border_bottom,
      feature_title,
      content,
      cta_label,
      cta_link
    } = slice.primary;

    return (
      <Container>
        <FeatureRow borderBottom={border_bottom === "Yes"} borderTop={border_top === "Yes"} justifyContent="center" alignItems="center">
          <Column lg={6} alignContent="left">
            {cta_link ? (
              <Link to={cta_link}>
                <Title><Text body={ feature_title } /></Title>
              </Link>
            ) : (
              <Title><Text body={ feature_title} /></Title>
            )}
            <Caption>
              <RichText body={ content } />
            </Caption>
          </Column>
          <Column lg={3} alignContent="center" textAlign="center">
            {cta_label && cta_link &&
              <CTAButton fullWidth={isMobileOnly} arrow={false} to={cta_link}>{cta_label}</CTAButton>
            }
          </Column>
        </FeatureRow>
      </Container>
    )
  }
}

export default SimpleSingleFeatureBlock;

export const query = graphql`
  fragment SimpleSingleFeatureBlock on SimpleSingleFeatureBlock {
    __typename
    primary {
      border_top
      border_bottom
      feature_title {
        text
      }
      cta_label
      cta_link {
        url
        document {
          ...Link
        }
      }
      content {
        html
      }
    }
  }
`;

import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { styled, media } from 'components/Theme/Styles';
import _ from 'lodash';
import Block from 'components/Theme/Block';
import Button from 'components/Theme/Button';
import Link from 'components/Theme/Link';
import FeaturedImage from 'components/Theme/FeaturedImage';
import InnerHTML from 'utils/InnerHTML';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';
import { isMobileOnly } from "react-device-detect";

const CTAButton = styled(Button)`
  ${media.between('small', 'large')`
    display: flex;
    button {
      margin: 0 auto;
    }
  `}
`;

const RowContainer = styled(Container)`
  padding: 0 !Important;
`;

const LeftColumn = styled(Column)`
  padding: 20px 0;
  order: 1;
  flex-grow: 1;
  ${media.lessThan('medium')`
    padding: 20px;
  `}
  ${media.between('small', 'large')`
    align-items: flex-start;
    justify-content: flex-start;
    align-self: flex-start;
    flex-grow: 1;
    max-width: 50%;
  `}
`;

const FeaturedColumn = styled(Column)`
  ${media.between('small', 'large')`
    flex: 0 0 35%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-grow: 1;
  `}
`;

const RowTitle = styled.h4`
  color: ${p => p.theme.brandInfo};
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 0;
`;

const Description = styled.div`
 color: ${p => p.theme.darkGray};
`;

class FeatureDocumentsRow extends Component {

  render() {
    const { slice } = this.props;
    let {
      cta_label,
      cta_link,
      title,
      description,
      background_color
    } = slice.primary;

    return (
      <Block color={background_color}>
        <RowContainer>
          <Row flexDirection="row-reverse">
            <LeftColumn lg={6}>
              <Link to={cta_link}>
                <RowTitle>{title.text || (_.isArray(title) && title[0] ? title[0].text : null)}</RowTitle>
              </Link>
              <Description>
                <InnerHTML html={description} />
              </Description>
              {cta_link && cta_label && (
                <CTAButton fullWidth={isMobileOnly} to={cta_link} arrow={false}>
                  {cta_label}
                </CTAButton>
              )}
            </LeftColumn>
            {slice.items.map((item, i) => {
              let document = item.featured_document && item.featured_document.document
              if (document) {
                document = document[0];
                return (
                  <FeaturedColumn md={3} key={`featured_image_${i}`}>
                    <FeaturedImage
                      to={document}
                      image={document.data.featured_image.url}
                      title={document.data.featured_headline}
                    />
                  </FeaturedColumn>
                );
              } else {
                return null;
              }
            })}
          </Row>
        </RowContainer>
      </Block>
    )
  }
}

export default FeatureDocumentsRow;

export const query = graphql`
  fragment FeatureDocumentsRow on FeatureDocumentsRow {
    __typename
    primary {
      cta_link {
        url
        document {
          ...Link
        }
      }
      cta_label
      description {
        html
      }
      background_color
      title {
        text
      }
    }
    items {
      featured_document {
        document {
          ...Link
          ... on Page {
            uid
            type
            data {
              featured_headline
              featured_image {
                url
              }
            }
          }
          ... on Post {
            uid
            type
            data {
              featured_headline
              featured_image {
                url
              }
            }
          }
          ... on Category {
            uid
            type
            data {
              featured_headline
              featured_image {
                url
              }
            }
          }
        }
      }
    }
  }
`;

import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { styled, media } from 'components/Theme/Styles';
import Block from 'components/Theme/Block';
import FeaturedImage from 'components/Theme/FeaturedImage';
import ThemeHeadline from 'components/Theme/Headline';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';
import ShortDivider from 'components/Theme/ShortDivider';

const HeadlineColumn = styled(Column)`
  padding-bottom: 15px;
  padding-top: 25px;
`;

const Headline = styled(ThemeHeadline)`
  color:${p => p.color || p.theme.black};
  padding-bottom: 15px;
  font-weight: bold;
  font-family: ${p => p.theme.fontFamilyTitle};
  ${media.lessThan("medium")`
    font-weight:400;
    font-size: ${p => p.theme.h1FontSize / 1.5}px;
  `}
`;

const RowContainer = styled(Container)`
  padding: 0 !Important;
  ${p => p.hasHeadline && 'padding-bottom: 25px !important;'}
`;

class DocumentsRow extends Component {

  render() {
    const { slice } = this.props;
    let { headline, background_color } = slice.primary;

    return (
      <Block color={background_color}>
        <RowContainer hasHeadline={!!headline}>
          {headline && (
            <Row justifyContent="center" textAlign="center">
              <HeadlineColumn md={12}>
                <Headline h3 text={headline} />
                <ShortDivider />
              </HeadlineColumn>
            </Row>
          )}
          <Row justifyContent="center">
            {slice.items.map((item, i) => {
              let document = item.document_item && item.document_item.document
              if (document) {
                document = document[0];
                return (
                  <Column md={3} key={`featured_image_${i}`}>
                    <FeaturedImage
                      to={document}
                      image={document.data.featured_image.url}
                      title={document.data.featured_headline}
                    />
                  </Column>
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

export default DocumentsRow;

export const query = graphql`
  fragment DocumentsRow on DocumentsRow {
    __typename
    primary {
      headline {
        text
      }
      background_color
    }
    items {
      document_item {
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

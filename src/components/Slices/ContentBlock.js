import React, { Component } from 'react';
import { graphql } from 'gatsby';
import RichText from 'components/Theme/RichText';
import { styled } from 'components/Theme/Styles';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';

const BlockContainer = styled(Container)`
  padding-top: ${p => p.paddingTop ? 25 : 0}px;
  padding-bottom: ${p => p.paddingTop ? 25 : 0}px;
`;

const Content = styled.div`
  *:first-of-type {
    margin-top: 0;
  }
`;

class ContentBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <BlockContainer paddingTop={data.padding_top === "Yes"} paddingBottom={data.padding_bottom === "Yes"}>
        <Row justifyContent="center">
          <Column lg={data.full_width === "Yes" ? 12 : 9} alignContent="center">
            <Content>
              <RichText body={ data.content } />
            </Content>
          </Column>
        </Row>
      </BlockContainer>
    )
  }
}

export default ContentBlock;

export const query = graphql`
  fragment ContentBlock on ContentBlock {
    __typename
    primary {
      full_width
      padding_top
      padding_bottom
      content {
        html
      }
    }
  }
`;

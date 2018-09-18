import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { styled } from 'components/Theme/Styles';
import RichText from 'components/Theme/RichText';
import HighlightContent from 'components/Theme/HighlightContent';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';

const Content = styled.div`
  *:first-of-type {
    margin-top: 0;
  }
`;

const BlockContainer = styled(Container)`
  padding-top: ${p => p.paddingTop ? 25 : 0}px;
  padding-bottom: ${p => p.paddingTop ? 25 : 0}px;
`;

class HighlightContentBlock extends Component {

  renderHighlight(data) {
    return (
      <Column lg={3}>
        <HighlightContent headline={ data.highlight_title } style={{ marginTop: 10 }}>
          <RichText body={ data.highlight_content } />
        </HighlightContent>
      </Column>
    );
  }

  isPlacementLeft(data) {
    return !!data.highlight_direction.match(/left/i);
  }

  isPlacementRight(data) {
    return !!data.highlight_direction.match(/right/i);
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <BlockContainer paddingTop={data.padding_top === "Yes"} paddingBottom={data.padding_bottom === "Yes"}>
        <Row justifyContent="center">
          { this.isPlacementLeft(data) ? this.renderHighlight(data) : null}
          <Column lg={data.full_width === "Yes" ? 9 : 6} alignContent="center">
            <Content>
              <RichText body={ data.content } />
            </Content>
          </Column>
          { this.isPlacementRight(data) ? this.renderHighlight(data) : null}
        </Row>
      </BlockContainer>
    )
  }
}

export default HighlightContentBlock;

export const query = graphql`
  fragment HighlightContentBlock on HighlightContentBlock {
    slice_type
    primary {
      full_width
      padding_top
      padding_bottom
      highlight_direction
      highlight_title {
        text
      }
      content {
        html
      }
      highlight_content {
        html
      }
    }
  }
`;

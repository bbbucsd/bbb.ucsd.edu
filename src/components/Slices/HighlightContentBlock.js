import React, { Component } from 'react';
import Styles, { styled, css, media } from 'components/Theme/Styles';
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


class HighlightContentBlock extends Component {

  renderHighlight(data) {
    return (
      <Column lg={3}>
        <HighlightContent headline={ data.highlight_title.text } style={{ marginTop: 10 }}>
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
      <Container>
        <Row justifyContent="center">
          { this.isPlacementLeft(data) ? this.renderHighlight(data) : null}
          <Column lg={6} alignContent="center">
            <Content>
              <RichText body={ data.content } />
            </Content>
          </Column>
          { this.isPlacementRight(data) ? this.renderHighlight(data) : null}
        </Row>
      </Container>
    )
  }
}

export default HighlightContentBlock;

export const query = graphql`
  fragment HighlightContentBlock on HighlightContentBlock {
    slice_type
    primary {
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

import React, { Component } from 'react';
import RichText from 'components/Theme/RichText'
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';


class ContentBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Container>
        <Row justifyContent="center">
          <Column lg={9} alignContent="center">
            <RichText body={ data.content } />
          </Column>
        </Row>
      </Container>
    )
  }
}

export default ContentBlock;

export const query = graphql`
  fragment ContentBlock on ContentBlock {
    __typename
    primary {
      content {
        html
      }
    }
  }
`;

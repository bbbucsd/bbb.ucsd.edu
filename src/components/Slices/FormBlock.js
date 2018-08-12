import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import { styled, css, media } from 'components/Theme/Styles';


class FormBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const items = slice.items;

    return (
      <Block>
        <Section>

        </Section>
      </Block>
    )
  }
}

export default FormBlock;

// language=GraphQL
export const query = graphql`
  fragment FormBlock on FormBlock {
    __typename
  }
`;

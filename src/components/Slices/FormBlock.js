import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import { styled, css, media } from 'components/Theme/Styles';
import Form from './Form';


class FormBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;
    const form = data.form.document
    return (
      <Block>
        <Section>
          <Form document={form[0]} />
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
    primary {
      form {
        document {
          data {
            body {
              ...TextField
              ...TextArea
              ...Checkboxes
            }
          }
        }
      }
    }
  }
`;

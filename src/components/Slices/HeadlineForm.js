import React, { Component } from 'react';
import { graphql } from 'gatsby';
import ModalContainer from 'components/Theme/ModalContainer';
import ModalForm from 'components/Theme/ModalForm';
import { styled } from 'components/Theme/Styles';
import {
  Column,
  Row,
} from 'styled-bootstrap-components';

const Headline = styled.h4`
  font-family: ${p => p.theme.fontFamilyTitle};
  font-size: 25px;
  position: relative;
  top: -25px;
  margin-bottom: -25px;
  text-align: center;
`;

const ModalRow = styled(Row)`
  height: 100%;
  text-align: left;
`;


class HeadlineForm extends Component {

  render() {
    const { events, slice } = this.props;
    const { headline } = slice.primary;

    return (
      <ModalContainer>
        <ModalRow>
          <Column>
            {headline && (
              <Headline>{headline}</Headline>
            )}
            <ModalForm data={slice.primary} events={events} />
          </Column>
        </ModalRow>
      </ModalContainer>
    );
  }
}

export default HeadlineForm;

export const query = graphql`
  fragment HeadlineForm on HeadlineForm {
    __typename
    primary {
      headline
      enable_first_name_field
      cta_label
      close_message
      redirect_url {
        url
        document {
          ...Link
        }
      }
      download {
        url
      }
    }
  }
`;

import React, { Component } from 'react';
import { graphql } from 'gatsby';
import ModalContainer from 'components/Theme/ModalContainer';
import ModalForm from 'components/Theme/ModalForm';
import RichText from 'components/Theme/RichText';
import { styled, media } from 'components/Theme/Styles';
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
`;

const ModalRow = styled(Row)`
  height: 100%;
  text-align: left;
`;


const LeftColumn = styled(Column)`
  min-height: 250px;
  flex: 0 0 100%;
  width: 100%;
  ${media.greaterThan('small')`
    border-right: 1px solid ${p => p.theme.brandLight};
    width: 50%;
    flex: 0 0 50%;
  `}
`;

const RightColumn = styled(Column)`
  min-height: 250px;
  width: 100%;
  flex: 0 0 100%;
  ${media.greaterThan('small')`
    width: 50%;
    flex: 0 0 50%;
  `}
`;

class DoubleColumnContentForm extends Component {

  render() {
    const { events, slice } = this.props;
    const {
      headline,
      content
    } = slice.primary;

    return (
      <ModalContainer width="800">
        <ModalRow>
          <LeftColumn>
            {headline && (
              <Headline>{headline}</Headline>
            )}
            <RichText body={content} text="smaller" />
          </LeftColumn>
          <RightColumn>
            <ModalForm data={slice.primary} events={events} />
          </RightColumn>
        </ModalRow>
      </ModalContainer>
    );
  }
}

export default DoubleColumnContentForm;

export const query = graphql`
  fragment DoubleColumnContentForm on DoubleColumnContentForm {
    __typename
    primary {
      headline
      content_direction
      enable_first_name_field
      cta_label
      close_message
      content {
        html
      }
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

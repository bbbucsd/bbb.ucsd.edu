import React, { Component } from 'react';
import Hero from 'components/Theme/Hero';
import Button from 'components/Theme/Button';
import RichText from 'components/Theme/RichText';
import { styled, css, media } from 'components/Theme/Styles';
import {
  Container,
  Row,
  Column,
  FormGroup,
  Label,
  FormControl
} from 'styled-bootstrap-components';
import { connect} from 'airlytics';

const ModalRow = styled(Row)`
  height: 100%;
`;

const ModalContainer = styled(Container)`
  padding: 25px;
  border-radius: 5px;
  border-top: 4px solid ${p => p.theme.brandInfo};
  width: 800px;
  min-height: 200px;
  background: white;
  &:before {
    content: ' ';
    position: absolute;
    top: -1px;
    border-top: 5px solid ${p => p.theme.brandInfo};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    left: 0;
    z-index: 0;
  }
`;

const LeftColumn = styled(Column)`
  min-height: 250px;
  width: 50%;
  flex: 0 0 50%;
  border-right: 4px solid ${p => p.theme.brandLight}
`;

const RightColumn = styled(Column)`
  min-height: 250px;
  width: 50%;
  flex: 0 0 50%;
`;

class DoubleColumnContentForm extends Component {
  render() {
    const { slice } = this.props;
    const {
      headline,
      content_direction,
      enable_first_name_field,
      content,
      redirect_url
    } = slice.primary;


    return (
      <ModalContainer>
        <ModalRow>
          <LeftColumn>
            <RichText body={content} />
          </LeftColumn>
          <RightColumn>
            <form>
              <FormGroup>
                <FormControl type="email" placeholder="name@example.com" />
              </FormGroup>
            </form>
          </RightColumn>
        </ModalRow>
      </ModalContainer>
    );
  }
}

export default connect()(DoubleColumnContentForm);

export const query = graphql`
  fragment DoubleColumnContentForm on DoubleColumnContentForm {
    __typename
    primary {
      headline
      content_direction
      enable_first_name_field
      content {
        html
      }
      redirect_url {
        url
        document {
          ...Link
        }
      }
    }
  }
`;

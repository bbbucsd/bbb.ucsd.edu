import React, { Fragment, Component } from 'react';
import { graphql } from 'gatsby';
import RichText from 'components/Theme/RichText';
import Link from 'components/Theme/Link';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';
import { styled, media } from 'components/Theme/Styles';

const BonusColumn = styled(Column)`
  padding: 25px;
`;

const BonusRow = styled(Row)`
  margin: -15px;
`;

const LinkContainer = styled.div`
  transition: all .2s ease-in-out;
  &:hover { transform: scale(1.05); z-index: 90; }
`;

const ContentContainer = styled.div`
  padding: 12px;
  border-radius: 4px;
  border: 3px solid ${p => p.theme.darkSuccess};
  background-color: ${p => p.theme.brandSuccess};

  * {
    font-size: 18px;
    ${media.greaterThan('medium')`
      font-size: 21px;
    `}
    display: inline-block;
  }

  strong, b, a, div, p {
    color: ${p => p.theme.white};
    margin: 0;
  }
`;

class BonusBox extends Component {

  renderContent(prefix, content) {
    return (
      <ContentContainer>
        {prefix && (
          <Fragment>
            <strong>{prefix}</strong>
            &nbsp;
          </Fragment>
        )}
        <RichText body={ content } />
      </ContentContainer>
    );
  }

  render() {
    const { slice } = this.props;
    const {
      cta_link,
      prefix,
      content,
    } = slice.primary;

    return (
      <Container>
        <BonusRow justifyContent="center">
          <BonusColumn lg={9} alignContent="center">
            {cta_link ? (
              <LinkContainer>
                <Link to={cta_link}>
                  {this.renderContent(prefix, content)}
                </Link>
              </LinkContainer>
            ) : this.renderContent(prefix, content)}
          </BonusColumn>
        </BonusRow>
      </Container>
    )
  }
}

export default BonusBox;

export const query = graphql`
  fragment BonusBox on BonusBox {
    __typename
    primary {
      prefix
      content {
        html
      }
      cta_link {
        url
        document {
          ...Link
        }
      }
    }
  }
`;

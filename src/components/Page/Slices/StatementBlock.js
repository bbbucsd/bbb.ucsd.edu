import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import ThemeHeadline from 'components/Theme/Headline';
import ThemeButton from 'components/Theme/Button';
import Styles, { styled, css} from 'components/Theme/Styles';

const Headline = styled(ThemeHeadline)`
  // enter styles here
`;

const Subheadline = styled(ThemeHeadline)`
  // enter styles here
`;

const Button = styled(ThemeButton)`
  margin-top:20px;
`;

const Row = styled(Section)`
  align-items: center;
  justify-content: center;
  text-align: center !important;
`;

class StatementBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block color={data.background_color} height={data.height}>
        <Row paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
          <Headline color={data.headline_color} text={data.headline} />
          <Subheadline color={data.subheadline_color} text={data.subheadline} />
          <Button to={data.cta_link} onClick={this.handleClickOpen}>{data.cta_label}</Button>
        </Row>
      </Block>
    );
  }
}

export default StatementBlock;

export const query = graphql`
  fragment StatementBlock on PrismicPageBodyStatementBlock {
    primary {
      height
      inner_padding_top
      inner_padding_bottom
      background_color
      headline_color
      headline {
        text
      }
      subheadline {
        text
      }
      cta_label
      cta_link {
        url
      }
    }
  }
`;

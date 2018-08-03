import React, { Component } from 'react';
import Block, { Section, Headline, Subheadline, Cta } from 'components/Elements/Block';
import style from './style.module.scss';

class StatementBlock extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Block color={data.background_color} height={data.height}>
        <Section className={style.root} paddingTop={data.inner_padding_top} paddingBottom={data.inner_padding_bottom}>
          <Headline color={data.headline_color} text={data.headline} />
          <Subheadline color={data.subheadline_color} text={data.subheadline} />
          <Cta to={data.cta_link} onClick={this.handleClickOpen} className={style.statementButton}>{data.cta_label}</Cta>
        </Section>
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

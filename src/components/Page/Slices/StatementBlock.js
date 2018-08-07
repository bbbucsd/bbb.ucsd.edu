import React, { Component } from 'react';
import Block, { Section } from 'components/Theme/Block';
import ThemeHeadline from 'components/Theme/Headline';
import ThemeButton from 'components/Theme/Button';
import { styled, css } from 'components/Theme/Styles';

const Headline = styled(ThemeHeadline)`
  font-size:${props => props.theme.h2FontSize * 1.5}px;
  color: ${props => props.color || props.theme.black};
`;

const Subheadline = styled(ThemeHeadline)`
  font-size:${props => props.theme.h2FontSize / 1.1}px;
  color: ${props => props.color || props.theme.black};
`;

const Button = styled(ThemeButton)`
  margin-top:20px;
`;


class StatementBlock extends Component {
  render() {
    const { background_color,
            height,
            align,
            justify,
            headline,
            headline_color,
            subheadline,
            subheadline_color,
            cta_label,
            cta_link
    } = this.props.slice.primary

    return (
      <Block color={background_color} height={height}>
        <Section align={align} justify={justify}>
          <Headline h2 color={headline_color} text={headline} />
          <Subheadline h3 color={subheadline_color} text={subheadline} />
          {cta_label &&
            <Button to={cta_link} onClick={this.handleClickOpen}>{cta_label}</Button>
          }
        </Section>
      </Block>
    );
  }
}

export default StatementBlock;

export const query = graphql`
  fragment StatementBlock on PrismicPageBodyStatementBlock {
    slice_type
    primary {
      height
      align
      justify
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

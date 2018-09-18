import React, { Component } from 'react';
import { graphql } from 'gatsby'
import Hero from 'components/Theme/Hero';
import ThemeHeadline from 'components/Theme/Headline';
import { styled, media } from 'components/Theme/Styles';

const Headline = styled(ThemeHeadline)`
  color:${p => p.color || p.theme.white};
  ${media.lessThan("medium")`
    font-weight:400;
    font-size: ${p => p.theme.h1FontSize / 2}px;
  `}
  ${media.lessThan('large')`
    width: 100%;
  `}
`;

const Subheadline = styled(ThemeHeadline)`
  font-weight:300;
  color:${p => p.color || p.theme.white};
  ${media.lessThan("medium")`
    font-size: ${p => p.theme.h2FontSize / 2}px;
  `}
`;

class SimpleHero extends Component {
  render() {
    const { slice } = this.props;
    const {
      headline,
      subheadline,
    } = slice.primary


    return (
      <Hero height="Medium">
        <Headline h1 text={headline} />
        {subheadline ? (
          <Subheadline h2 text={subheadline} />
        ) : null}
      </Hero>
    );
  }
}

export default SimpleHero;

export const query = graphql`
  fragment SimpleHero on SimpleHero {
    __typename
    primary {
      headline {
        text
      }
      subheadline {
        text
      }
    }
  }
`;

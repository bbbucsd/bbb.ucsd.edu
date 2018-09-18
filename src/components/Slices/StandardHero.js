import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Hero from 'components/Theme/Hero';
import ThemeHeadline from 'components/Theme/Headline';
import ThemeButton from 'components/Theme/Button';
import { styled, media } from 'components/Theme/Styles';

const Headline = styled(ThemeHeadline)`
  color:${p => p.color || p.theme.white};
  ${media.lessThan("medium")`
    font-weight:400;
    font-size: 30px;
    width: 75%;
  `}
`;

const Subheadline = styled(ThemeHeadline)`
  font-weight:300;
  color:${p => p.color || p.theme.white};
  ${media.lessThan("medium")`
    font-size: 18px;
    width: 75%;
  `}
`;

const Button = styled(ThemeButton)`
  margin-top: 30px;
  max-width: 500px;
  align-self: center;
`;

class StandardHero extends Component {
  render() {
    const { slice } = this.props;
    const {
      align,
      height,
      background_color,
      headline,
      headline_color,
      subheadline,
      subheadline_color,
      hero_asset,
      cta_label,
      cta_link} = slice.primary

    let bg = hero_asset && hero_asset.url
    let showArrow = cta_link && ((cta_link.type || cta_link.__typename) !== "modal");
    return (
      <Hero align={align} src={bg} height={height} color={background_color}>
        <Headline h1 color={headline_color} text={headline} />
        <Subheadline h2 color={subheadline_color} text={subheadline} />

        {cta_label &&
          <Button large arrow={showArrow} to={cta_link}>{cta_label}</Button>
        }
      </Hero>
    );
  }
}

export default StandardHero;

export const query = graphql`
  fragment StandardHero on StandardHero {
    __typename
    primary {
      height
      align
      background_color
      headline_color
      headline {
        text
      }
      subheadline_color
      subheadline {
        text
      }
      hero_asset {
        url
      }
      cta_label
      cta_link {
        url
        document {
          ...Link
        }
      }
    }
  }
`;

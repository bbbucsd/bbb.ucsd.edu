import React, { Component } from 'react';

// Elements
import HeroWrapper from 'components/Elements/HeroWrapper'
import HeroTypography from 'components/Elements/HeroTypography';
import Highlight from 'components/Elements/Highlight';
import Button from 'components/Elements/Button';

// Style
import style from './style.module.scss'

class HighlightHero extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <HeroWrapper src={data.hero_asset.url}>
        <div className={style.scopeVerbiage}>
          <HeroTypography h3>{data.superheadline.text}</HeroTypography>
          <HeroTypography h1>{data.headline.text}</HeroTypography>

          {data.cta_link && data.cta_label ? (
            <div className={style.cta}>
              <Button to={data.cta_link.url} text={data.cta_label}></Button>
            </div>
          ) : null }

          <div className={style.highlightGroup}>
            <Highlight largeText="#1" smallText="Best Selling Press" color="white" />
            <div className={style.diagonalLine}></div>
            <Highlight largeText="250" smallText="Pizzas/hour" color="white" />
            <div className={style.diagonalLine}></div>
            <Highlight largeText='18"' smallText="Pressed Product" color="white" />
          </div>
        </div>
      </HeroWrapper>
    );
  }
}

export default HighlightHero;

export const query = graphql`
  fragment HighlightHero on PrismicPageBodyHighlightHero  {
    primary {
      superheadline {
        text
      }
      headline {
        text
      }
      hero_asset {
        url
      }
    }
  }
`;

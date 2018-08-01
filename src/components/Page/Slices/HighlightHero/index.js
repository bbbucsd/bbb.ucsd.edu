import React, { Component } from 'react';
import Hero, { Headline, Cta } from 'components/Elements/Hero'
import style from './style.module.scss'
import Highlight from 'components/Elements/Highlight'

class HighlightHero extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return null;
    //return (
      //<Hero src={data.hero_asset.url}>
        //<div className={style.scopeVerbiage}>
          //<Headline h3>{data.superheadline.text}</Headline>
          //<Headline h1>{data.headline.text}</Headline>

          //{data.cta_link && data.cta_label ? (
            //<div className={style.cta}>
              //<Cta to={data.cta_link.url} text={data.cta_label}></Cta>
            //</div>
          //) : null }

          //<div className={style.highlightGroup}>
            //<Highlight largeText="#1" smallText="Best Selling Press" color="white" />
            //<div className={style.diagonalLine}></div>
            //<Highlight largeText="250" smallText="Pizzas/hour" color="white" />
            //<div className={style.diagonalLine}></div>
            //<Highlight largeText='18"' smallText="Pressed Product" color="white" />
          //</div>
        //</div>
      //</Hero>
    //);
  }
}

export default HighlightHero;

export const query = graphql`
  fragment HighlightHero on PrismicPageBodyHighlightHero  {
    slice_type
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

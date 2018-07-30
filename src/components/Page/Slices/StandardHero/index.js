import React, { Component } from 'react';

// Elements
import HeroWrapper from 'components/Elements/HeroWrapper';
import HeroTypography from 'components/Elements/HeroTypography';
import Button from 'components/Elements/Button/index';

// Style
import style from './style.module.scss'

class StandardHero extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <HeroWrapper alignment={data.headline_alignment} src={data.hero_asset && data.hero_asset.url}>

        <HeroTypography h1>{data.headline.text}</HeroTypography>
        <HeroTypography h2>{data.subheadline.text}</HeroTypography>

        {data.cta_label &&
          <div className={style.cta}>
            <Button to={data.cta_link.url} text={data.cta_label}></Button>
          </div>
        }


      </HeroWrapper>
    );
  }
}

export default StandardHero;

// Normally PrismicPageBodyStandardhero would be PrismicPageBodyStandardHero (capital Hero) but the original
// api name was set to "lower case hero"
export const query = graphql`
  fragment StandardHero on PrismicPageBodyStandardhero {
    primary {
      headline {
        text
      }
      subheadline {
        text
      }
      headline_alignment
      hero_asset {
        url
      }
      cta_label
      cta_link {
        url
      }
    }
  }
`;

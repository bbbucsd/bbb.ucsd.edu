import React, { Component } from 'react';
import Hero from 'components/Theme/Hero';
import ThemeHeadline from 'components/Theme/Headline';
import ThemeButton from 'components/Theme/Button';
import Highlight from 'components/Theme/Highlight'
import Styles, { styled, css} from 'components/Theme/Styles';

const Headline = styled(ThemeHeadline)`
  // enter styles here
`;

const Subheadline = styled(ThemeHeadline)`
  // enter styles here
`;

const Button = styled(ThemeButton)`
  margin-top: 30px;
`;

const HighlightGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 80px;
`;

const DiagonalLine = styled.div`
  position: relative;
  z-index: 1;
  margin-left:-240px;
  margin-right:-260px;
  width: 80px;
  height: 1px;
  background-color: white;
  transform: rotate(-65deg);
`;


class HighlightHero extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Hero src={data.hero_asset.url}>
        <div>
          <Headline h3>{data.superheadline.text}</Headline>
          <Subheadline h1>{data.headline.text}</Subheadline>

          {data.cta_link && data.cta_label ? (
            <div className={style.cta}>
              <Button to={data.cta_link.url} text={data.cta_label}></Button>
            </div>
          ) : null }

          <HighlightGroup>
            <Highlight largeText="#1" smallText="Best Selling Press" color="white" />
            <DiagonalLine />
            <Highlight largeText="250" smallText="Pizzas/hour" color="white" />
            <DiagonalLine />
            <Highlight largeText='18"' smallText="Pressed Product" color="white" />
          </HighlightGroup>
        </div>
      </Hero>
    );
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

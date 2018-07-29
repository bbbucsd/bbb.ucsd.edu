import React, { Component } from 'react';

// Elements
import HeroTypography from 'components/Elements/HeroTypography';

// Style
import style from './style.module.scss'

class SimpleHero extends Component {

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <div>
        <div className={style.scope} style={{ height: this.props.height }}>
          <div className={`scope-verbiage ${style.scopeVerbiage}`}>
            <HeroTypography size="h1">{data.headline.text}</HeroTypography>
            <HeroTypography size="h2">{data.subheadline.text}</HeroTypography>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleHero;

export const query = graphql`
  fragment SimpleHero on PrismicPageBodySimpleHero {
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
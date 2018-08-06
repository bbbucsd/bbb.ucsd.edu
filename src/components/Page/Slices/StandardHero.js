import React, { Component } from 'react';
import Hero from 'components/Theme/Hero';
import ThemeHeadline from 'components/Theme/Headline';
import ThemeButton from 'components/Theme/Button';
import Styles, { styled, css} from 'components/Theme/Styles';

const Headline = styled(ThemeHeadline)`
  color: ${props => props.theme.white}
`;

const Subheadline = styled(ThemeHeadline)`
  color: ${props => props.theme.white}
`;

const Button = styled(ThemeButton)`
  margin-top: 30px;
`;

class StandardHero extends Component {
  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Hero alignment={data.headline_alignment} src={data.hero_asset && data.hero_asset.url}>
        <Headline h1 text={data.headline} />
        <Subheadline h2 text={data.subheadline} />

        {data.cta_label &&
          <Button to={data.cta_link} onClick={this.handleClickOpen}>{data.cta_label}</Button>
        }
      </Hero>
    );
  }
}

export default StandardHero;

// Normally PrismicPageBodyStandardhero would be PrismicPageBodyStandardHero (capital Headline) but the original
// api name was set to "lower case hero"
export const query = graphql`
  fragment StandardHero on PrismicPageBodyStandardhero {
    slice_type
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

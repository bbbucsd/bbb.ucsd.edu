import React, { Component } from 'react';
import Hero, { Headline, Subheadline, Cta } from 'components/Elements/Hero';
import style from './style.module.scss';
import Modal from 'components/Page/Modal';

class StandardHero extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <Hero alignment={data.headline_alignment} src={data.hero_asset && data.hero_asset.url}>
        <Modal
          data={data.cta_link}
          open={this.state.open}
          onClose={this.handleClose}
        />
        <Headline text={data.headline} />
        <Subheadline text={data.subheadline} />
        <Cta to={data.cta_link} onClick={this.handleClickOpen}>{data.cta_label}</Cta>
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
        document {
          ...Modal
          ... on PrismicPage {
            data {
              path
            }
          }
        }
      }
    }
  }
`;

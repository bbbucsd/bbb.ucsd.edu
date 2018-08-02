import React, { Component } from 'react';
import Block, { Section, Headline, Subheadline, Cta } from 'components/Elements/Block';
import Button from 'components/Theme/Button';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class FeatureBlock extends Component {

  render() {
    const { slice } = this.props;
    const { items } = slice;

    return (
      <Block className={style.root}>
        {( items || [] ).map((item) =>
          <Section className={style.feature}>
            <div className={style.asset} style={{backgroundImage: `url('${item.asset.url}')`}}></div>

            <Headline text={item.headline} />
            <Subheadline text={item.subheadline} />

            <div className={style.ctaButton}>
              <Button small={true} to={item.cta_link && item.cta_link.url}>{item.cta_label}</Button>
            </div>
          </Section>
        )}
      </Block>
    )
  }
}

export default FeatureBlock;

export const query = graphql`
  fragment FeatureBlock on PrismicPageBodyFeatureBlock {
    slice_type
    items {
      asset {
        url
      }
      headline {
        text
      }
      subheadline {
        text
      }
      cta_label
      cta_link {
        url
        document {
          data {
            path
          }
        }
      }
    }
  }
`;


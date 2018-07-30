import React, { Component } from 'react';
import Button from 'components/Elements/Button';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class FeatureBlock extends Component {

  render() {
    const { slice } = this.props;
    const { items } = slice;

    return (
      <div className={style.root}>
        {( items || [] ).map((item) =>
          <div className={style.feature}>
            <div className={style.asset} style={{backgroundImage: `url('${item.asset.url}')`}}></div>

            <h2 className={style.headline}>{item.headline.text}</h2>
            <h3 className={style.subheadline}>{item.subheadline.text}</h3>

            <div className={style.ctaButton}>
              <Button small={true} to={item.cta_link && item.cta_link.url} text={item.cta_label}></Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default FeatureBlock;

export const query = graphql`
  fragment FeatureBlock on PrismicPageBodyFeatureBlock {
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
      }
    }
  }
`;


import React, { Component } from 'react';
import InnerHTML from 'utils/InnerHTML';

// Style
import style from './style.module.scss'
const __CONTENT_STYLES__ = `__CONTENT_STYLES__`;

class ContentBlock extends Component {

  getStyles() {
    if (global[__CONTENT_STYLES__]) { return null; }
    global[__CONTENT_STYLES__] = `.content h1 {
              font-family: ${global.fontFamilyTitle};
              color: ${global.brandPrimary};
              --x-height-multiplier: 0.363;
              --baseline-multiplier: 0.157;
            }
            .content h2 {
              --x-height-multiplier: 0.363;
              --baseline-multiplier: 0.157;
            }
            .content h3 {
              --x-height-multiplier: 0.363;
              --baseline-multiplier: 0.157;
            }
            .content h4 {
              --x-height-multiplier: 0.363;
              --baseline-multiplier: 0.157;
            }
            .content div,
            .content p,
            .content a,
            .content ul,
            .content ol {
              --x-height-multiplier: 0.35;
              --baseline-multiplier: 0.179;
              font-family: ${global.fontFamily};
              color: ${global.darkGray};
            }
            a, a:hover {
              font-family: ${global.fontFamily};
              color: ${global.darkGray};
              border-color: ${global.brandInfo};
            }
            .content *:not(li) > ul,
            .content *:not(li) > ol, .content:not(li) > ul, .content:not(li) > ol {
              border: 3px dashed ${global.brandSecondary};
            }
            .content *:not(li) > ul li:before,
            .content *:not(li) > ol li:before, .content:not(li) > ul li:before, .content:not(li) > ol li:before {
              color: ${global.brandInfo};
            }
          `
    return global[__CONTENT_STYLES__];
  }

  render() {
    const { slice } = this.props;
    const data = slice.primary;

    return (
      <div className={style.content}>
        <InnerHTML>
          {data.content.html}
        </InnerHTML>
        <style>{this.getStyles()}</style>
      </div>
    )
  }
}

export default ContentBlock;

export const query = graphql`
  fragment ContentBlock on PrismicPageBodyContentBlock {
    slice_type
    primary {  
      content {
        html
      }
    }
  }
`;

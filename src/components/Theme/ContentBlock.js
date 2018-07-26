import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import classNames from 'classnames';
import "./ContentBlock.css";
import InnerHTML from './InnerHTML';

const __CONTENT_STYLES__ = `__CONTENT_STYLES__`;

const styles = theme => ({
  content: {
    width: '900px',
    margin: '50px auto',
  },
});

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
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <div className={classNames("content", classes.content)}>
        <InnerHTML>
          {data.content.html}
        </InnerHTML>
        <style>{this.getStyles()}</style>
      </div>
    )
  }
}

ContentBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(ContentBlock);

export const query = graphql`
  fragment ContentBlock on PrismicPageBodyContentBlock {
    primary {
      content {
        html
      }
    }
  }
`;

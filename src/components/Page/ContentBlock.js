import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import classNames from 'classnames';
import "./ContentBlock.css";

const styles = theme => ({
  content: {
    width: '900px',
    margin: '50px auto',
  },
});

class ContentBlock extends Component {
  render() {
    const { classes, data } = this.props;

    return (
      <div className={classNames("content", classes.content)}>
        <div dangerouslySetInnerHTML={{__html: data.body.childMarkdownRemark.html}} />
          <style>{`
            .content h1 {
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
          `}</style>
      </div>
    )
  }
}

ContentBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(ContentBlock);

export const query = graphql`
  fragment ContentBlock on ContentfulLayoutContentBlock {
      body {
        childMarkdownRemark {
          html
        }
      }
  }
`;

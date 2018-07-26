import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    width: '900px',
    margin: '50px auto',
  }
});

class ContentBlock extends Component {
  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        <div dangerouslySetInnerHTML={{__html: data.body.childMarkdownRemark.html}} />
      </div>
    )
  }
}

ContentBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(ContentBlock);

//export const query = graphql`
  //fragment ContentBlock on ContentfulLayoutContentBlock {
      //body {
        //childMarkdownRemark {
          //html
        //}
      //}
  //}
//`;

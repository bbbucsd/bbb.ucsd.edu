import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

// Elements


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: '50px',
  },
})

class FeaturedProducts extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        Featured Products
      </div>
    )
  }
}

FeaturedProducts.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(FeaturedProducts);

import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {

  },
  scopeVerbiageH1: {
    color: '#fff',
    fontFamily: global.fontFamilyTitle,
    fontSize: '60px',
    margin:'0',
    fontWeight: '200',
    fontStyle: 'normal',
    letterSpacing: '-3px',
  },
  scopeVerbiageH2: {
    color: '#ccc',
    fontSize: '25px',
    margin:'10px 0 0 0',
    fontWeight: '200',
    fontStyle: 'normal',
  },
  scopeVerbiageH3: {
    color: '#ccc',
    fontSize: '18px',
    margin:'10px 0 0 0',
    fontWeight: '200',
    fontStyle: 'normal',
  },
});

class HeroTypography extends Component {
  size() {
    switch(this.props.size) {
      case 'h1':
        return this.props.classes.scopeVerbiageH1;
      case 'h2':
        return this.props.classes.scopeVerbiageH2;
      case 'h3':
        return this.props.classes.scopeVerbiageH2;
      default:
        return this.props.classes.scopeVerbiageH1;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {React.createElement(this.props.size, {
          style: this.props.color ? { color: this.props.color } : {},
          className: this.size()
        }, this.props.children)}
      </div>
    );
  }
}

HeroTypography.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(HeroTypography);

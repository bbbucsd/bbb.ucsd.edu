import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';


const styles = theme => ({
  root: {
    height: '400px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
  }
})

class LogoBlockInline extends Component {

  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        {this.props.data.logos.map((logo, i) => <div><img alt={logo.title} src={logo.file.url} className={classes.logo} /></div>)}
      </div>
    )
  }
}

LogoBlockInline.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(LogoBlockInline);

//export const query = graphql`
  //fragment LogoBlockInline on ContentfulLayoutLogoBlockInline {
    //logos {
      //title
      //file {
        //url
        //contentType
      //}
    //}
  //}
//`;

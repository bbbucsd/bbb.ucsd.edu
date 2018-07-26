import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    margin: '150px auto 150px auto',
    textAlign: 'center',
    width: '80%',
  },
  headline: {
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
    margin: '100px 0 0 0',
    padding: '0',
  },
  subheadline: {
    fontFamily: 'lato',
    fontWeight: '200',
    fontStyle: 'normal',
    margin: '0',
    padding: '0',
  },
  image: {
    display: 'block',
    margin: '50px 0 0 -30px'
  }
})

class SingleImageSection extends Component {
  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        <h1 className={classes.headline}>{data.headline}</h1>
        <h2 className={classes.subheadline}>{data.subheadline}</h2>

        <img alt={data.title} src={data.image.file.url} className={classes.image} />
      </div>
    )
  }
}

SingleImageSection.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(SingleImageSection);

//export const query = graphql`
  //fragment SingleImageSection on ContentfulLayoutSingleImageSection {
    //headline
    //subheadline
    //image {
      //title
      //file {
        //url
        //contentType
      //}
    //}
  //}
//`;

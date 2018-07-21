import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import { connect } from 'airlytics';

const styles = theme => ({
  root: {
    width: '900px',
    margin: '50px auto',
  },
  h1: {
    fontSize: '40px',
    margin:'20px 0',
    fontWeight: '200',
    fontStyle: 'normal',
    letterSpacing: '-3px',
  },
  h2: {
    fontSize: '25px',
    margin:'40px 0 20px 0',
    fontWeight: '200',
    fontStyle: 'normal',
  },
  back: {
    position: 'absolute',
    left: '25px',
    top: '25px',
    lineHeight: '25px',
    cursor: 'pointer',
  },
  arrow: {
    position: 'relative',
    top: '10px',
    left: '5px',
    width: '32px',
    height: '32px',
  },
})

class Privacy extends Component {
  back() {
    window.history.back()
  }

  render() {
    const legal = this.props.data.contentfulLegal
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <a onClick={ this.back } className={classes.back}><ArrowLeft className={classes.arrow} /> Back</a>
        <h1 className={classes.h1}>{legal.headline}</h1>
        <div dangerouslySetInnerHTML={{__html: legal.body.childMarkdownRemark.html}}></div>
      </div>
    );
  }
}

Privacy.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), withWidth(), connect())(Privacy);

export const legalQuery = graphql`
  query legalQuery($id: String!) {
    contentfulLegal(id: { eq: $id }) {
      headline
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

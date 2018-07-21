import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

// Elements
import List, { ListItem } from 'material-ui/List';
import Button from '../Theme/Button';


const styles = theme => ({
  root: {
    height: '600px',
  },
  container: {
    display: 'table',
    width: '100%',
    height: '600px',
    padding: '0 !important',
    position:'relative',
  },
  spotlight: {
    fontSize: '10px',
    textTransform: 'uppercase',
    color: '#ccc',
  },
  backgroundVideo: {
    left: '0',
    right: '0',
    top: '0',
    objectFit: 'cover',
    display:'block',
    width: '100%',
    position: 'absolute',
    height: '600px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      left: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      left: 'auto',
      right: '-200px',
      width: 'auto',
    }
  },
  containerItem: {
    display: 'table-cell',
    width: '50%',
    padding: global.largePadding,
    textAlign: 'left',
    verticalAlign: 'middle',
    backgroundColor: '#fcfcfc',
    fontWeight: '300',
    overflow:'hidden',
    fontStyle: 'normal',
  },
  kitchenPic: {
    background: 'url("/images/dough.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  subheadline: {
    fontWeight: '300',
    fontStyle: 'normal',
    margin:'0',
  },
  secondaryHeadline: {
    color: '#777'
  },
  buyNow: {
    marginTop: '20px',
  }
})

class Answer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <List className={ classes.container }>
          <ListItem className={ classes.containerItem }>
            <b className={classes.spotlight}>Product Spotlight</b>
            <h1 className={classes.subheadline}>Pizza Presses</h1>
            <h2 className={`${classes.subheadline} ${classes.secondaryHeadline}`}>Consistant pizza pressed in seconds and capable of pressing 250 pizzas an hour.</h2>
            <div className={classes.buyNow}>
              <Button to="/" size="small" text="How to Buy" />
            </div>
          </ListItem>
          <ListItem className={`${classes.containerItem}`}>
            <video loop autoPlay playsInline muted className={classes.backgroundVideo}>
              <source src="/video/doughpress.mp4" type="video/mp4" />
            </video>
          </ListItem>
        </List>
      </div>
    )
  }
}

Answer.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(Answer);

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
    height: '100%',
    padding: '0 !important',
  },
  containerItem: {
    display: 'table-cell',
    width: '50%',
    padding: global.largePadding,
    textAlign: 'left',
    verticalAlign: 'middle',
    backgroundColor: '#5b8edc',
    color: '#fff',
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  kitchenPic: {
    background: 'url("/images/profits-up.gif")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  subheadline: {
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
    margin:'0',
  },
  secondaryHeadline: {
    color: '#e6edf8'
  },
  buyNow: {
    marginTop: '20px',
  },
  buttonColor: {
    backgroundColor: '#fff',
    color: '#5b8edc',
  }
})

class Problem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <List className={ classes.container }>
          <ListItem className={`${classes.containerItem} ${classes.kitchenPic}`}></ListItem>
          <ListItem className={ classes.containerItem }>
            <h1 className={classes.subheadline}>Spend more time with your customers</h1>
            <h2 className={`${classes.subheadline} ${classes.secondaryHeadline}`}>Produce food faster, cheaper, and more consistent without sacrificing quality.</h2>

            <div className={classes.buyNow}>
              <Button to="/" text="Learn More" className={classes.buttonColor} size="small"></Button>
            </div>
          </ListItem>
        </List>
      </div>
    )
  }
}

Problem.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(Problem);

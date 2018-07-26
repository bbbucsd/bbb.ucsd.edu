import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

// Elements
import List, { ListItem } from 'material-ui/List';


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
    backgroundColor: '#fcfcfc',
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  kitchenPic: {
    background: 'url("/images/dough.jpg")',
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
    color: '#777'
  },
})

class MissionStatement extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <List className={ classes.container }>
          <ListItem className={ classes.containerItem }>
            <h1 className={classes.subheadline}>Focus on your food, not your kitchen</h1>
            <h2 className={`${classes.subheadline} ${classes.secondaryHeadline}`}>We help commercial kitchens become more efficient with smart machines.</h2>
          </ListItem>
          <ListItem className={`${classes.containerItem} ${classes.kitchenPic}`}></ListItem>
        </List>
      </div>
    )
  }
}

MissionStatement.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(MissionStatement);

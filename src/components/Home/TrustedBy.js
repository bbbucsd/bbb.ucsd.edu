import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

// Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '../Theme/Button';


const styles = theme => ({
  root: {
    marginBottom: '150px',
    textAlign: 'center',
  },
  headline: {
    fontWeight: '200',
    fontStyle: 'normal',
    margin: '100px 0 0 0',
    padding: '0',
  },
  container: {
    display: 'table',
    width: '100%',
    padding: '0 !important',
  },
  containerItem: {
    display: 'table-cell',
    width: '100%',
    padding: global.largePadding,
    textAlign: 'left',
    verticalAlign: 'middle',
  },
  customers: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flex: '5',
    flexDirection: 'row',
  },
  secondRow: {
    marginTop: '75px',
  },
  customer: {
    flex: '4',
    display: 'flex',
    flexFlow: 'column wrap',
    height: '150px',
    justifyContent: 'center',
  },
  logo: {
    width: '100px',
    display: 'inline-block',
    margin: 'auto',
  },
  border: {
    borderRight: '1px solid #ccc',
  },
  copyBlock: {
    backgroundColor: '#fafafa',
  },
  learnMore: {
    textTransform: 'uppercase',
    display: 'block',
    margin: '0 auto',
    fontWeight: '200',
    fontStyle: 'normal',
  },
})

class TrustedBy extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1 className={classes.headline}>Trusted by the most demanding kitchens</h1>
        <List className={ classes.container }>
          <ListItem className={ classes.containerItem }>
            <div className={ classes.customers }>
              <div className={ classes.row }>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt="Taco Bell" src="/images/customer-logos/taco-bell.png" className={ classes.logo } />
                </div>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt="Blaze" src="/images/customer-logos/blaze.png" className={ classes.logo } />
                </div>
                <div className={classes.customer}>
                  <img alt="Costco" src="/images/customer-logos/costco.png" className={ classes.logo } />
                </div>
              </div>
              <div className={`${classes.row} ${classes.secondRow}`}>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt="Whole Foods" src="/images/customer-logos/whole-foods.png" className={ classes.logo } />
                </div>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt="Pieology" src="/images/customer-logos/pieology.png" className={ classes.logo } />
                </div>
                <div className={ classes.customer }>
                  <img alt="In-n-Out" src="/images/customer-logos/innout.png" className={ classes.logo } />
                </div>
              </div>
            </div>
          </ListItem>
        </List>

        <Button to="/" text="Read Case Study" size="small"></Button>
      </div>
    )
  }
}

TrustedBy.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(TrustedBy);

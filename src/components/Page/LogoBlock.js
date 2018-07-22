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
    fontFamily: 'lato',
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
    fontFamily: 'lato',
    fontWeight: '200',
    fontStyle: 'normal',
  },
})

class LogoBlock extends Component {
  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        <h1 className={classes.headline}>{data.headline}</h1>
        <List className={ classes.container }>
          <ListItem className={ classes.containerItem }>
            <div className={ classes.customers }>
              <div className={ classes.row }>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt={data.logos[0].title} src={data.logos[0].file.url} className={ classes.logo } />
                </div>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt={data.logos[1].title} src={data.logos[1].file.url} className={ classes.logo } />
                </div>
                <div className={classes.customer}>
                  <img alt={data.logos[2].title} src={data.logos[2].file.url} className={ classes.logo } />
                </div>
              </div>
              <div className={`${classes.row} ${classes.secondRow}`}>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt={data.logos[3].title} src={data.logos[3].file.url} className={ classes.logo } />
                </div>
                <div className={` ${classes.customer} ${classes.border} `}>
                  <img alt={data.logos[4].title} src={data.logos[4].file.url} className={ classes.logo } />
                </div>
                <div className={ classes.customer }>
                  <img alt={data.logos[5].title} src={data.logos[5].file.url} className={ classes.logo } />
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

LogoBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(LogoBlock);

export const query = graphql`
  fragment LogoBlock on ContentfulLayoutLogoBlock {
    headline
    logos {
      id
      title
      file {
        url
        contentType
      }
    }
  }
`;

import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

// Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from './Elements/Button';

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
    marginTop: '75px',
  },
  topRow: {
    marginTop: '0px',
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
});

class LogoBlock extends Component {

  createMatrix(logos) {
    let group = [];
    let count = 0;
    logos.forEach((logo, index) => {
      if (index >= 3 && index % 3 === 0) { count++; }
      group[count] = group[count] || [];
      group[count].push(logo)
    });
    return group;
  }

  renderLogos(logos) {
    if (!logos.length) { return null; }
    const { classes } = this.props;
    const matrix = this.createMatrix(logos);
    return matrix.map((row, index) => {
      let columns = row.map((column, index) => {
        return (
          <div key={`column_${index}`} className={`${classes.customer} ${classes.border}`}>
            <img alt={column.logo.url.split("_")[1].split(".")[0]} src={column.logo.url} className={ classes.logo } />
          </div>
        );
      });
      return (
        <div key={`row_${index}`} className={` ${classes.row} ${index === 0 ? classes.topRow : ''}`}>
          {columns}
        </div>
      );
    });
  }

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;
    const logos = slice.items;

    return (
      <div className={classes.root}>
        <h1 className={classes.headline}>{data.headline.text}</h1>
        <List className={ classes.container }>
          <ListItem className={ classes.containerItem }>
            <div className={ classes.customers }>
              {this.renderLogos(logos)};
            </div>
          </ListItem>
        </List>

        <Button to={data.cta_link && data.cta_link.url} text={data.cta_label} size="small" />
      </div>
    )
  }
}

LogoBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(LogoBlock);

export const query = graphql`
  fragment LogoBlock on PrismicPageBodyLogoBlock {
    primary {
      headline {
        text
      }
      cta_link {
        url
      }
      cta_label
    }
    items {
      logo {
        url
      }
    }
  }
`;

import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { Link } from 'react-router-dom';

const styles = theme => ({
  listItem: {
    color: '#fff',
    fontFamily: 'lato',
    fontSize: '16px',
    padding: '0 !important',
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: '32px',
    '&:hover': {
      color: '#fff',
    }
  },
  floatingCopy: {
    color: '#FFF !important',
    '&:hover': {
      color: '#fff',
    },
  },
});

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { classes } = this.props;

    return (
      <List className={this.props.className || null}>
        <ListItem className={this.props.listClassName || null}><Link to="/start-here" className={`${this.props.floating ? classes.floatingCopy : classes.fixedCopy}`}>Start Here</Link></ListItem>
        <ListItem className={this.props.listClassName || null}><Link to="/about" className={`${this.props.floating ? classes.floatingCopy : classes.fixedCopy}`}>About</Link></ListItem>
      </List>
    );
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(MainMenu);

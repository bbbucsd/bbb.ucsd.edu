import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Link from 'gatsby-link';

// Style
import style from './style.module.scss';


class SubNavItem extends Component {
  render() {
    return (
      <ListItem className={style.navGroupItem}>
        { this.props.to ? <Link to={this.props.to || ''}>{this.props.children}</Link> : this.props.children }
      </ListItem>
    );
  }
}

export default SubNavItem;

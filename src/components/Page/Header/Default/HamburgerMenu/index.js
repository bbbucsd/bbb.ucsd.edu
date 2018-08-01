import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'components/Elements/Link';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);


class HamburgerMenu extends Component {

  render() {
    return (
      <List className={style.root}>
        <ListItem>Find a Sales Rep</ListItem>
        <ListItem>Find a Dealer</ListItem>
        <ListItem>Events</ListItem>
        <ListItem>Training</ListItem>
        <ListItem><Link to="/contact-us">Contact Us</Link></ListItem>
      </List>
    );
  }
}

export default HamburgerMenu;

import React, { Component } from 'react';
import Link from 'components/Theme/Link';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);


class HamburgerMenu extends Component {

  render() {
    return (
      <ul className={style.root}>
        <li>Find a Sales Rep</li>
        <li>Find a Dealer</li>
        <li>Events</li>
        <li>Training</li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    );
  }
}

export default HamburgerMenu;

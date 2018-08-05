import React, { Component } from 'react';
import Link from 'components/Theme/Link';

// Style
import style from './style.module.scss';


class SubNavItem extends Component {
  render() {
    return (
      <li className={style.navGroupItem}>
        { this.props.to ? <Link to={this.props.to || ''}>{this.props.children}</Link> : this.props.children }
      </li>
    );
  }
}

export default SubNavItem;

import React, { Component } from 'react';

// Style
import style from './style.module.scss';


class SubNavGroup extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <ul className={style.navGroupWrapper}>
        <li className={style.navGroup}>
          <ul className={style.navItemGroup}>
            { title != null ? <li className={style.navGroupTitle}>{ title }</li> : '' }
            { children }
          </ul>
        </li>
      </ul>
    );
  }
}

export default SubNavGroup;

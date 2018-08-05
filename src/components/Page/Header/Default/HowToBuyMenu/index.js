import React, { Component } from 'react'
import Link from 'components/Theme/Link'
import style from 'components/Elements/SubNav/style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class HowToBuyMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <div className={style.root}>
        <Link to="/" className={cx({floatingCopy: floating, fixedCopy: !floating})}>How to buy</Link>
      </div>
    );
  }
}

export default HowToBuyMenu;

import React, { Component } from 'react'
import Link from 'components/Theme/Link'
import Waypoint from 'react-waypoint'
import ProductMenu from './ProductMenu/index'
import IndustriesMenu from './IndustriesMenu/index'
import SupportMenu from './SupportMenu/index'
import HowToBuyMenu from './HowToBuyMenu/index'
import HamburgerMenu from './HamburgerMenu/index'
import Ionicon from 'react-ionicons'
import style from './style.module.scss'
import classNames from 'classnames/bind'
let cx = classNames.bind(style);


class Default extends Component {
    state = {
      floating: true,
      drawer: false
    };

    floatHeader = () => {
      this.setState({ floating: true });
    };

    unFloatHeader = () => {
      this.setState({ floating: false });
    };

    toggleDrawer = () => {
      this.setState({ drawer: !this.state.drawer });
    };

    render() {
      return (
        <div>
          <div className={cx({header: true, floatingBg: this.state.floating})}>
            <div className={style.navBar}>
              <ul className={style.navBarLeft}>
                <li className={style.listItem}>
                  <Link to="/" className={cx({logo: true, floatingCopy: this.state.floating, fixedCopy: !this.state.floating})}>PROLUXE</Link>
                </li>
              </ul>

              <ul className={style.navBarCenter}>
                <li className={cx({listItem: true, centerItem: true})}><ProductMenu floating={this.state.floating} /></li>
                <li className={cx({listItem: true, centerItem: true})}><IndustriesMenu floating={this.state.floating} /></li>
                <li className={cx({listItem: true, centerItem: true})}><SupportMenu floating={this.state.floating} /></li>
                <li className={cx({listItem: true, centerItem: true})}><HowToBuyMenu floating={this.state.floating} /></li>
              </ul>

              <ul className={style.navBarRight}>
                <li className={style.listItem}>
                  <Ionicon icon="md-menu" onClick={this.toggleDrawer} className={cx({menuIcon: true, floatingCopy: this.state.floating, fixedCopy: !this.state.floating})} />
                </li>

                {/*<Drawer anchor='right' open={this.state.drawer} onClose={this.toggleDrawer} >*/}
                  {/*<div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>*/}
                    {/*<HamburgerMenu />*/}
                  {/*</div>*/}
                {/*</Drawer>*/}
              </ul>
            </div>
          </div>

          <Waypoint onEnter={this.unFloatHeader} onLeave={this.floatHeader} />
        </div>
      );
    }
}



export default Default;

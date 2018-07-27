import React, { Component } from 'react';

// Elements
import SubNav, { SubNavGroup, SubNavItem } from 'components/Elements/SubNav';
import Button from 'components/Elements/Button';
import EmailIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

class SupportMenu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <SubNav text="Support" menuWidth={480} offsetY={85} padding={20}>
        <SubNavGroup>
          <SubNavItem>
            <SubNavGroup innerClassName={style.fastestRoute}>
              <SubNavItem>
                <div className={style.fastestRouteItem}>
                  <Button to="/" text="Get Help" size="small" className={style.fastestRouteItemButton} /> For the fastest and easiest way to get help.
                </div>
              </SubNavItem>
            </SubNavGroup>
          </SubNavItem>
          <SubNavItem>
            <SubNavGroup title="Email Us">
              <SubNavItem><EmailIcon className={style.icon} /><a href="mailto: support@proluxe.com">support@proluxe.com</a></SubNavItem>
            </SubNavGroup>
            <SubNavGroup title="Call Us">
              <SubNavItem><PhoneIcon className={style.icon} /><a href="callto:1-800-624-6717">1.800.624.6717</a></SubNavItem>
            </SubNavGroup>
          </SubNavItem>
        </SubNavGroup>
      </SubNav>
    );
  }
}

export default SupportMenu;

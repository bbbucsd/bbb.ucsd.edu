import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

var menuWidth = 900;
var offsetY = 200;
var offsetX = 96; //isn't this offsetY (vertical)?
var arrowSize = 13;
var padding = 15;

class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  open = () => {
    this.setState({open: true});
  };

  close = () => {
    this.setState({open: false});
  };

  wrapperStyle = () => {
    return {
      top: (this.props.offsetX || offsetX)  + 'px',
      left: '-' + (this.props.offsetY || offsetY) + 'px',
      width: (this.props.menuWidth || menuWidth) + 'px'
    }
  };

  arrowStyle = () => {
    arrowSize = (this.props.arrowSize || arrowSize);

    return {
      top: '-' + arrowSize + 'px',
      left: (this.props.offsetY || offsetY) + arrowSize + padding + (arrowSize / 2) + 'px',
      borderLeft: arrowSize + 'px solid transparent',
      borderRight: arrowSize + 'px solid transparent',
      borderBottom: arrowSize + 'px solid #f6f6f6'
    }
  };

  subNavStyle = () => {
    return {
      padding: this.props.padding || '50px',
    }
  };

  render() {
    const { children, floating } = this.props;

    return (
      <div className={style.root} onMouseLeave={this.close}>
        <Link to={this.props.to || '/'} onMouseEnter={ this.open } className={cx({navLink: true, subNavOpen: this.state.open, floatingCopy: floating, fixedCopy: !floating})}>{this.props.text}</Link>

        <div style={this.wrapperStyle()} className={cx({subNavWrapper: true, animateOpen: this.state.open})}>
          <div style={this.arrowStyle()} className={style.arrow}></div>
          <List style={this.subNavStyle()} className={style.subNav}>
            <ListItem className={style.subNavInner}>
              { children }
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export SubNavGroup from './SubNavGroup';
export SubNavItem from './SubNavItem';
export default SubNav;


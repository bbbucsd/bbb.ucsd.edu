import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import List from '@material-ui/core/List';


var menuWidth = 900;
var offsetY = 200;
var offsetX = 96; //isn't this offsetY (vertical)?
var arrowSize = 13;
var padding = 15;

const styles = theme => ({
  root: {
    position: 'relative',
    padding: padding + 'px',
  },
  subNavWrapper: {
    position:'absolute',
    opacity: '0',
    visibility: 'hidden',
    transform: 'translateY(0)',
    willChange: 'transform',
    transition: 'opacity 0.2s linear, transform 0.2s linear, visibility 0.8s linear',
  },
  subNavOpen: {
    color: '#fff',
  },
  animateOpen: {
    transform: 'translateY(-34px)',
    opacity: '1',
    visibility: 'visible',
  },
  subNav: {
    position: 'absolute',
    backgroundColor: '#f6f6f6',
    boxShadow: '0px 40px 100px rgba(0, 0, 0, 0.15)',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    color: '#000',
  },
  arrow: {
    display: 'inline-block',
    position: 'absolute',
    width: '0',
    height: '0',
  }
})

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
    const { classes } = this.props;

    return (
      <div className={classes.root} onMouseLeave={this.close}>
        <Link to={this.props.to || '/'} onMouseEnter={ this.open } className={`${this.props.className} ${this.state.open ? classes.subNavOpen : ''}`}>{this.props.text}</Link>

        <div style={this.wrapperStyle()} className={`${classes.subNavWrapper} ${this.state.open ? classes.animateOpen : ''}`}>
          <div style={this.arrowStyle()} className={classes.arrow}></div>
          <List style={this.subNavStyle()} className={`${classes.subNav}`}>
            {this.props.children}
          </List>
        </div>
      </div>
    );
  }
}


SubNav.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(SubNav);

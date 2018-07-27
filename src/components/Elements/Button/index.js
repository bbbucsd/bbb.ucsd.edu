import React, { Component } from 'react';
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button';
import { KeyboardArrowRight as ArrowRight } from '@material-ui/icons';

// Style
import style from './style.module.scss'
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

// ThemeButton
class ThemeButton extends Component {

  constructor(props) {
    super(props);
    this.state = { animateArrow: false }
  };

  toggleArrow = () => {
    this.setState({animateArrow: !this.state.animateArrow})
  };

  render() {
    const {to, text, className, customStyle} = this.props;

    return (
      <Link to={to}
            onMouseOver={this.toggleArrow}
            onMouseOut={this.toggleArrow}
            className={className || null}
            style={customStyle}>
        <Button aria-label={text} className={style.button}>
          {text}
          <ArrowRight className={cx({arrow: true, extendedIcon: true, animateArrow: this.state.animateArrow})} />
        </Button>
      </Link>
    )
  }
}


export default ThemeButton;

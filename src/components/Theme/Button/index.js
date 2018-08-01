import React, { Component } from 'react';
import Link from 'gatsby-link';
import MuiButton from '@material-ui/core/Button';
import { KeyboardArrowRight as ArrowRight } from '@material-ui/icons';

// Style
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

// ThemeButton
class Button extends Component {

  constructor(props) {
    super(props);
    this.state = { animateArrow: false };
  }

  toggleArrow = () => {
    this.setState({animateArrow: !this.state.animateArrow});
  }

  linkTo() {
    const { to } = this.props;
    try {
      if (to.document) {
        this.link = to.document[0];
      } else {
        this.link = to.url;
      }
    } catch(error) {
      this.link = to;
    }

    return this.link || '#';
  }

  render() {
    const {children, small, customStyle, className, onClick} = this.props;

    return (
      <Link to={ this.linkTo() }
            onClick={onClick}
            onMouseOver={this.toggleArrow}
            onMouseOut={this.toggleArrow}
            className={cx({ buttonLink:true  })}
            style={customStyle}>
        <MuiButton aria-label={children} className={`${cx({ button: true, buttonSmall: small })} ${className}`}>
          {children}
          <ArrowRight className={cx({arrow: true, arrowSmall: small, extendedIcon: true, animateArrow: this.state.animateArrow})} />
        </MuiButton>
      </Link>
    )
  }
}


export default Button;

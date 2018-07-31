import React, { Component } from 'react';
import Link from 'components/Elements/Link';
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
    try {
      this.link = this.props.to.url
    } catch(error) {
      this.link = this.props.to
    }

    return this.link || '#'
  }

  render() {
    const {children, small, customStyle, className} = this.props;

    return (
      <Link to={ this.linkTo() }
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

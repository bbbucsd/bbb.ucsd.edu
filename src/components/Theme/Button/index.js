import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import Ionicon from 'react-ionicons'
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

// ThemeButton
class Button extends Component {

  state = {
    animateArrow: false
  };

  toggleArrow = () => {
    this.setState({animateArrow: !this.state.animateArrow});
  }

  render() {
    const {children, small, customStyle, className, onClick} = this.props;

    return (
      <Link to={ this.props.to }
            onMouseOver={this.toggleArrow}
            onMouseOut={this.toggleArrow}
            className={cx({ buttonLink:true  })}
            style={customStyle}>
        <button aria-label={children} className={`${cx({ button: true, buttonSmall: small })} ${className}`}>
          {children}
          {this.props.arrow === false ? null : (
            <Ionicon icon="ios-arrow-forward" className={cx({arrow: true, arrowSmall: small, extendedIcon: true, animateArrow: this.state.animateArrow})} />
          )}
        </button>
      </Link>
    )
  }
}


export default Button;





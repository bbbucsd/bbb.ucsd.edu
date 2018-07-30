import React, { Component } from 'react';
import Link from 'components/Elements/Link';
import Button from '@material-ui/core/Button';
import { KeyboardArrowRight as ArrowRight } from '@material-ui/icons';

// Style
import style from './style.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

// ThemeButton
class ThemeButton extends Component {

  constructor(props) {
    super(props);
    this.state = { animateArrow: false };
  }

  toggleArrow = () => {
    this.setState({animateArrow: !this.state.animateArrow});
  }

  render() {
    const {to, text, small, customStyle} = this.props;

    return (
      <Link to={to || '#'}
            onMouseOver={this.toggleArrow}
            onMouseOut={this.toggleArrow}
            className={cx({ buttonLink:true  })}
            style={customStyle}>
        <Button aria-label={text} className={cx({ button:true, buttonSmall: small })}>
          {text}
          <ArrowRight className={cx({arrow: true, arrowSmall: small, extendedIcon: true, animateArrow: this.state.animateArrow})} />
        </Button>
      </Link>
    )
  }
}


export default ThemeButton;

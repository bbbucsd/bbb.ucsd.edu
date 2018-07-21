import React, { Component } from 'react';
import Link from 'gatsby-link'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { ArrowRight } from '@material-ui/icons';

const styles = theme => ({
  button: {
    color: 'white',
    padding: '20px',
    backgroundColor: '#5b8edc',
    borderRadius: '2px',
  },
  arrow: {
    position: 'relative',
    top: '10px',
    left: '5px',
    width: '32px',
    height: '32px',
  },
  animateArrow: {
    animation: 'bounce 2s infinite',
  },
  buttonsmall: {
    padding:'10px',
    fontSize: '12px',
  },
  arrowsmall: {
    width: '24px',
    height: '24px',
    top: '8px !important',
    left: '3px !important',
  },
  buttonoutlined: {
    backgroundColor: 'transparent',
    border: '2px solid #5b8edc',
    color: '#000',
    '&:hover': {
      backgroundColor: '#5b8edc',
      color: '#fff',
    }
  }
})

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = { animateArrow: false }
  };

  toggleArrow = (e) => {
    this.setState({animateArrow: !this.state.animateArrow})
  };

  render() {
    const { classes } = this.props;

    return (
      <Link to={this.props.to}
            onMouseOver={this.toggleArrow}
            onMouseOut={this.toggleArrow}
            className={`${classes.button} ${classes['button' + this.props.size]} ${this.props.outlined ? classes['buttonoutlined'] : ''} ${this.props.className}`}
            style={this.props.customStyle}>
        {this.props.text}
        <ArrowRight className={`${classes.arrow} ${classes['arrow' + this.props.size]} ${this.state.animateArrow ? classes.animateArrow : ''}`} />
      </Link>
    )
  }
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default compose(withStyles(styles))(Button);

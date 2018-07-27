import React, { Component } from 'react';
import Link from 'gatsby-link'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { KeyboardArrowRight as ArrowRight } from '@material-ui/icons';

const styles = theme => ({
  button: {
    color: 'white',
    margin: theme.spacing.unit,
    backgroundColor: global.brandInfo,
    "&:hover": {
      backgroundColor: global.brandInfo,
    },
    borderRadius: 0,
    textTransform: 'none',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  arrow: {
    position: 'relative',
    top: '1px',
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
  }
});

class ThemeButton extends Component {

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
            className={this.props.className || null}
            style={this.props.customStyle}>
        <Button aria-label={this.props.text}  className={classes.button}>
          {this.props.text}
          <ArrowRight className={`${classes.arrow} ${classes.extendedIcon} ${this.state.animateArrow ? classes.animateArrow : ''}`} />
        </Button>
      </Link>
    )
  }
}

ThemeButton.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

export default compose(withStyles(styles))(ThemeButton);

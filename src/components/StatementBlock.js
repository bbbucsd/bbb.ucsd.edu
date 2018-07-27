import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Index from './Elements/HeroTypography/index';
import Button from './Elements/Button/index';

const styles = theme => ({
  statementCTA: {
    backgroundColor: global.darkWhite,
    height: '400px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  headline: {
    fontStyle: 'normal',
    fontFamily: global.fontFamilyTitle,
    fontSize: '2em',
    fontWeight: 300,
    marginBottom: 30,
    color: global.black,
  },
  statementButton: {
    fontSize: '16px',
  },
});

class StatementBlock extends Component {

  headlineColor() {
    if (this.props.slice.primary.headline_color !== '') {
      return { color: this.props.slice.primary.headline_color };
    }
  }

  backgroundColor() {
    if (this.props.slice.primary.background_color !== '') {
      return { backgroundColor: this.props.slice.primary.background_color };
    }
  }

  render() {
    const { classes, slice } = this.props;
    const data = slice.primary;

    return (
      <div className={`${classes.statementCTA} wrapper`} style={ this.backgroundColor() }>
        <div>
          <h2 className={classes.headline} style={ this.headlineColor() }>{data.headline.text}</h2>
          <Button to={data.cta_link.url} text={data.cta_label} className={classes.statementButton}></Button>
        </div>
      </div>
    );
  }
}


StatementBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  slice: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(StatementBlock);

export const query = graphql`
  fragment StatementBlock on PrismicPageBodyStatementBlock {
    primary {
      background_color
      headline_color
      headline {
        text
      }
      cta_label
      cta_link {
        url
      }
    }
  }
`;

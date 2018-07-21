import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import StandardHero from '../Page/StandardHero';
import StandardHeroCopy from '../Page/StandardHero/StandardHeroCopy';

import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '50px 0',
  },
  container: {
    width: '40%',
  }
})

class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <StandardHero image="/images/contact-hero.jpg" reducedHeight={true}>
          <StandardHeroCopy size="h1">Contact Us</StandardHeroCopy>
        </StandardHero>

        <div className={classes.root}>
          <div className={classes.container}>
            <h1>Let us help</h1>
          </div>
          <div className={classes.container}>
            <form>
              <div>
                <TextField label="First Name" />
                <TextField label="Last Name" />
              </div>
              <div>
                <TextField label="Email" />
              </div>
              <div>
                <TextField label="Company" />
              </div>
              <div>
                <TextField label="Phone Number" />
              </div>
              <div>
                <TextField label="Address" />
              </div>
              <div>
                <TextField label="City" />
              </div>
              <div>
                <TextField label="State" />
              </div>
              <div>
                <TextField label="Zip" />
              </div>
              <div>
                <TextField label="Country" />
              </div>
              <div>
                <TextField label="Country" />
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(Contact);

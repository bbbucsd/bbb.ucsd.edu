import React, { Component } from 'react';

import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { Link } from 'react-router-dom';
import Button from '../../Elements/Button/index';

const styles = theme => ({
  footer: {
    backgroundColor: global.brandSecondary,
    height: '500px',
    width: '100%',
    color: '#92A5B1',
  },
  lastChanceCTA: {
    backgroundColor: '#fafafa',
    height: '400px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  lastChanceButton: {
    fontSize: '16px',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    height: '75px',
    width: '100%',
    borderBottom: '1px solid #2F363C',
  },
  socialSpacer: {
    flex: '1 1 auto',
    width: 'auto',
  },
  socialLink: {
    borderLeft: '1px solid #2F363C',
    width: '75px',
    flex: '0 0 auto',
    fontSize: '28px',
    color: '#92A5B1',
    textAlign: 'center',
    lineHeight: '75px',
  },
  footerNav: {
    display: 'flex',
    width: '100%',
    marginTop: '30px',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerHeader: {
    width: '100%',
    textAlign: 'left',
    color: '#fafafa',
    fontFamily: 'lato',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '13px',
    paddingBottom: '25px',
    borderBottom: '1px solid #2F363C',
    marginBottom: '5px',
    paddingLeft: '0',
    paddingRight: '0',
    textTransform: 'uppercase',
  },
  footerSection: {
    margin: '0 25px',
    width: '200px',
  },
  footerNavLinks: {
    listStyleType: 'none',
    margin: '25px 0',
    padding: '0',
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '24px',
  },
  footerLegal: {
    borderTop: '1px solid #2F363C',
    display: 'flex',
    width: '100%',
    marginTop: '30px',
    paddingTop: '30px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '14px',
  },
  footerLegalLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  footerLegalRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'left',
  },
  footerLegalLink: {
    marginRight: '50px',
  },
  flag: {
    height: '14px',
    marginLeft: '5px',
    position: 'relative',
    top: '2px',
  },
});

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
          <div>
            <div style={ this.props.lastChance !== false ? {} : {display: 'none'} }  className={`${classes.lastChanceCTA} wrapper`}>
              <div>
                <h1 className={classes.subheadline}>Ready to increase profit?</h1>
                <Button to="/" text="Contact Sales" className={classes.lastChanceButton} />
              </div>
            </div>

            <div className={classes.footer}>
              <div className={classes.social}>
                <div className={classes.socialSpacer}></div>
                <div className={classes.socialLink}>
                  <i className="fab fa-youtube "></i>
                </div>
                <div className={classes.socialLink}>
                  <i className="fab fa-facebook"></i>
                </div>
                <div className={classes.socialLink}>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className={classes.socialLink}>
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>


              <div className="wrapper">
                <div className={classes.footerNav}>
                  <div className={classes.footerSection}>
                    <h3 className={classes.footerHeader}>Company</h3>
                    <ul className={classes.footerNavLinks}>
                      <li>About Us</li>
                      <li>Press</li>
                      <li>Blog</li>
                      <li>Investors</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                  <div className={classes.footerSection}>
                    <h3 className={classes.footerHeader}>Products</h3>
                    <ul className={classes.footerNavLinks}>
                      <li>Ovens</li>
                      <li>Pizza Presses</li>
                      <li>Tortilla Presses</li>
                      <li>Grills</li>
                      <li>Bun Carmalizers</li>
                    </ul>
                  </div>
                  <div className={classes.footerSection}>
                    <h3 className={classes.footerHeader}>Service &amp; Support</h3>
                    <ul className={classes.footerNavLinks}>
                      <li>Training</li>
                      <li>Technical Support</li>
                      <li>Find a Service Provider</li>
                      <li>Find a Sales Representative</li>
                      <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                  </div>
                  <div className={classes.footerSection}>
                    <h3 className={classes.footerHeader}>Resources</h3>
                    <ul className={classes.footerNavLinks}>
                      <li>Demos</li>
                      <li>Events</li>
                      <li>Downloads</li>
                    </ul>
                  </div>
                </div>

                <div className={classes.footerLegal}>
                  <div className={classes.footerLegalLeft}>
                    <div className={classes.footerLegalLink}>&copy; {process.env.SITE_NAME} {new Date().getFullYear()}</div>
                    <div className={classes.footerLegalLink}><Link to="/terms">Terms of use</Link></div>
                    <div className={classes.footerLegalLink}><Link to="/privacy">Privacy Policy</Link></div>
                  </div>
                  <div className={classes.footerLegalRight}>
                    Designed &amp; Manufactured in California <img alt="Made in California" src="/images/american-flag.png" className={classes.flag} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
}

export default compose(withStyles(styles), withWidth())(Footer);

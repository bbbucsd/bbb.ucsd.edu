import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import Flag from './american-flag.png'

// Style
import style from './style.module.scss';

class Footer extends Component {
  render() {

    return (
      <div>
        <div className={style.footer}>
          <div className={style.social}>
            <div className={style.socialSpacer}></div>
            <div className={style.socialLink}>
              <i className="fab fa-youtube "></i>
            </div>
            <div className={style.socialLink}>
              <i className="fab fa-facebook"></i>
            </div>
            <div className={style.socialLink}>
              <i className="fab fa-twitter"></i>
            </div>
            <div className={style.socialLink}>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>


          <div className="wrapper">
            <div className={style.footerNav}>
              <div className={style.footerSection}>
                <h3 className={style.footerHeader}>Company</h3>
                <ul className={style.footerNavLinks}>
                  <li>About Us</li>
                  <li>Press</li>
                  <li>Blog</li>
                  <li>Investors</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className={style.footerSection}>
                <h3 className={style.footerHeader}>Products</h3>
                <ul className={style.footerNavLinks}>
                  <li>Ovens</li>
                  <li>Pizza Presses</li>
                  <li>Tortilla Presses</li>
                  <li>Grills</li>
                  <li>Bun Carmalizers</li>
                </ul>
              </div>
              <div className={style.footerSection}>
                <h3 className={style.footerHeader}>Service &amp; Support</h3>
                <ul className={style.footerNavLinks}>
                  <li>Training</li>
                  <li>Technical Support</li>
                  <li>Find a Service Provider</li>
                  <li>Find a Sales Representative</li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
              <div className={style.footerSection}>
                <h3 className={style.footerHeader}>Resources</h3>
                <ul className={style.footerNavLinks}>
                  <li>Demos</li>
                  <li>Events</li>
                  <li>Downloads</li>
                </ul>
              </div>
            </div>

            <div className={style.footerLegal}>
              <div className={style.footerLegalLeft}>
                <div className={style.footerLegalLink}>&copy; {process.env.SITE_NAME} {new Date().getFullYear()}</div>
                <div className={style.footerLegalLink}><Link to="/terms">Terms of use</Link></div>
                <div className={style.footerLegalLink}><Link to="/privacy">Privacy Policy</Link></div>
              </div>
              <div className={style.footerLegalRight}>
                Designed &amp; Manufactured in California <img alt="Made in California" src={Flag} className={style.flag} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

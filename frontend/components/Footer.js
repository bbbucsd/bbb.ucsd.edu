import React, { Component } from "react";
import Link from "next/link";
import FooterMenu from './FooterMenu';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-secondary text-light pt-4 pb-4">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                  <div className="logo mb-4">
                    Automate Your Brand
                  </div>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://twitter.com/ericraio" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/ericraio" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/ericraio" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a></li>
                    <li className="list-inline-item"><a href="https://instagram.com/ericraio" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i></a></li>
                  </ul>
                </div>
                <FooterMenu {...this.props} />
              </div>
            </div>
          </div>
          <div className="footer-below">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                </div>
              </div>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.layout.footer }}
          />
        </footer>
    );
  }
}

export default Footer;

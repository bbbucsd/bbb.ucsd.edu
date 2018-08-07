import React, { Component } from 'react';
import { connect } from 'airlytics';

const ARTIFICIAL_WAIT = 1000;

class Interstitial extends Component {

  state = {
    redirecting: false
  }

  _delay(ms) {
    var start = +new Date;
    while ((+new Date - start) < ms);
  }

  componentDidUpdate() {
    if (typeof window === "undefined") { return; }
    if (!this.props.pathContext.to) { return; }
    if (this.state.redirecting) { return; }
    this.setState({ redirecting: true });
    var _this = this;
    setTimeout(() => {
      ['unload', 'beforeunload'].forEach((name) => {
        window.addEventListener(name, (e) => {
          _this._delay(ARTIFICIAL_WAIT - 1000);
        });
      });
      window.location = this.props.pathContext.to;
    }, 1000);
  }

  render() {
    if (!this.props.pathContext.to) {
      return (
        <div>
          Error: No URL to redirect to
        </div>
      );
    } else {
      return (
        <div>
          Redirecting...
        </div>
      );
    }
  }

}

export default connect()(Interstitial);

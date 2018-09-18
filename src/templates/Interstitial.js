import React, { Component } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Theme/Header';
import Footer from 'components/Theme/Footer';
import StandardHero from 'components/Slices/StandardHero';
import { actionDispatch } from 'airlytics';
import titlize from 'utils/titlize';

const ARTIFICIAL_WAIT = 500;

class Interstitial extends Component {

  state = {
    redirecting: false
  }

  _delay(ms) {
    var start = +new Date();
    while ((+new Date() - start) < ms);
  }

  componentDidMount() {
    if (typeof window === "undefined") { return; }
    if (!this.props.pageContext.to) { return; }
    if (this.state.redirecting) { return; }
    this.setState({ redirecting: true });
    var _this = this;
    setTimeout(() => {
      ['unload', 'beforeunload'].forEach((name) => {
        window.addEventListener(name, (e) => {
          const actions = actionDispatch();
          const name = titlize(this.props.location.pathname.replace("/", ""))
          actions.track("Affiliate Click", {
            tags: "Affiliate - " + name,
            name
          });
          _this._delay(ARTIFICIAL_WAIT - 500);
        });
      });
      window.location = this.props.pageContext.to;
    }, 1000);
  }

  render() {
    if (!this.props.pageContext.to) {
      return (
        <div>
          Error: No URL to redirect to
        </div>
      );
    } else {
      return (
        <Layout {...this.props}>
          <StandardHero slice={{ primary: { headline_color: 'white', height: 'XL', headline: "Sit tight, we're redirecting.."}}} />
        </Layout>
      );
    }
  }

}

export default Interstitial;

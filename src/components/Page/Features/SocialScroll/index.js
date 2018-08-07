import React, { Fragment, Component } from 'react';
import { connect } from 'airlytics';
import Ionicon from 'react-ionicons'
import { Hidden } from 'hedron';
import _ from 'lodash';
import style from './style.module.scss';
import classNames from 'classnames/bind';
import Config from '../../../../config';
let cx = classNames.bind(style);

const SCROLL_PERCENTAGE_THRESHOLD = 10;

class SocialScroll extends Component {

  state = {
    count: 0,
    showWidget: false,
    showRibbon: false
  };

  shareFacebook = () => {
    this.props.actions.shareFacebook(window.location.href);
  }

  shareLinkedIn = () => {
    this.props.actions.shareLinkedIn(window.location.href);
  }

  shareTwitter = () => {
    this.props.actions.shareTwitter(window.location.href, window.document.title, Config.get("twitter").site);
  }

  getCounts(socialCounts) {
    return _.sum(_.values(socialCounts));
  }

  componentWillMount() {
    this.props.actions.getSocialCounts();
    this.setState({
      count: this.getCounts(this.props.page.socialCounts[window.location.pathname])
    });
    this.displaySocial();
    window.addEventListener('scroll', this.displaySocial.bind(this));
  }

  displaySocial() {
    let value = window.scrollY;
    let winHeight = window.innerHeight;
    let body = document.body;
    let html = document.documentElement;
    let docHeight = Math.max( body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight );
    let max = docHeight - winHeight;
    let percent = (value / max) * 100;
    if (percent > SCROLL_PERCENTAGE_THRESHOLD) {
      this.displayRibbon(value);
      if (!this.state.showWidget) {
        this.setState({ showWidget: true });
      }
    } else {
      if (this.state.showWidget) {
        this.setState({ showWidget: false });
      }
    }

  }

  displayRibbon(value) {
    let currentPosition = window.scrollY;
    if (this.previousPosition > currentPosition) {
      // scrolling up
      if (this.state.showRibbon) {
        this.setState({ showRibbon: false });
      }
    } else {
      // scrolling down
      if (!this.state.showRibbon) {
        this.setState({ showRibbon: true });
      }
    }
    this.previousPosition = value;
  }

  componentWillReceiveProps(props) {
    if (this.props.lastAction.type !== props.lastAction.type) {
      if(props.lastAction.type === "GET_SOCIAL_COUNTS_SUCCESS") {
        this.setState({
          count: this.getCounts(props.page.socialCounts[window.location.pathname])
        });
      }
    }
  }

  renderCount() {
    return (
      <div className={style.count}>
        {this.state.count}
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <Hidden xs sm>
          <div className={`${cx({ showWidget: this.state.showWidget, hideWidget: !this.state.showWidget })} ${style.widget}`}>
            {this.renderCount()}
            <div onClick={this.shareTwitter} className={style.widgetShare}>
              <Ionicon icon="logo-twitter" color="#55ACEE" />
            </div>
            <div onClick={this.shareFacebook} className={style.widgetShare}>
              <Ionicon icon="logo-facebook" color="#3B5998" />
            </div>
            <div onClick={this.shareLinkedIn} className={style.widgetShare}>
              <Ionicon icon="logo-linkedin" color="#0077B5" />
            </div>
          </div>
        </Hidden>
        <Hidden md lg>
          <div className={`${cx({ showRibbon: this.state.showRibbon, hideRibbon: !this.state.showRibbon })} ${style.ribbon}`}>
            {this.renderCount()}
            <div onClick={this.shareTwitter} className={style.widgetShare}>
              <Ionicon icon="logo-twitter" color="#55ACEE" />
            </div>
            <div onClick={this.shareFacebook} className={style.widgetShare}>
              <Ionicon icon="logo-facebook" color="#3B5998" />
            </div>
            <div onClick={this.shareLinkedIn} className={style.widgetShare}>
              <Ionicon icon="logo-linkedin" color="#0077B5" />
            </div>
          </div>
        </Hidden>
      </Fragment>
    );
  }

}

export default connect()(SocialScroll);

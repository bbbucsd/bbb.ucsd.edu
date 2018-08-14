import React, { Fragment, Component } from 'react';
import { connect } from 'airlytics';
import _ from 'lodash';
import State from '../../state';
import { styled, css, media } from 'components/Theme/Styles';
import { Facebook } from 'styled-icons/fa-brands/Facebook.cjs'
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs'
import { Linkedin } from 'styled-icons/fa-brands/Linkedin.cjs'

const Count = styled.div`
  font-size: 40px;
`;

const Widget = styled.div`
  position: fixed;
  z-index: 9999;
  right: auto;
  left: 75px;
  top: 45vh;
  visibility: hidden;
  -webkit-transition: opacity 1s ease-in;
  -moz-transition: opacity 1s ease-in;
  -o-transition: opacity 1s ease-in;
  -ms-transition: opacity 1s ease-in;
  transition: opacity 1s ease-in;

  ${p => p.show ? `
    visibility: visible;
    opacity: 1;
  ` : null }

  ${media.lessThan('medium')`
    width: 100%;
    right: auto;
    top: auto;
    left: auto;
    padding: 25px 0;
    bottom: 0;
    text-align: center;
  `}

`;

const SocialLink = styled.div`
  svg {
    width:30px;
    height:30px;
  }
`;

const Share = styled.div`
  cursor: pointer;
`;

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
    this.props.actions.shareTwitter(window.location.href, window.document.title, State.get("twitter").site);
  }

  getCounts(socialCounts) {
    return _.sum(_.values(socialCounts));
  }

  componentWillMount() {
    if (typeof window === "undefined") { return; }
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
      <Count>{this.state.count}</Count>
    );
  }

  render() {
    return (
      <Fragment>
        <Widget show={this.state.showWidget}>
          {this.renderCount()}
          <Share onClick={this.shareTwitter}>
            <SocialLink><Twitter color="#55ACEE" /></SocialLink>
          </Share>
          <div onClick={this.shareFacebook}>
            <SocialLink><Facebook color="#3B5998" /></SocialLink>
          </div>
          <div onClick={this.shareLinkedIn}>
            <SocialLink><Linkedin color="#0077B5" /></SocialLink>
          </div>
        </Widget>
      </Fragment>
    );
  }

}

export default connect()(SocialScroll);

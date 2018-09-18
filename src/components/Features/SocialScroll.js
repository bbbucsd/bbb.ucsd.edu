import React, { Fragment, Component } from 'react';
import { styled, media } from 'components/Theme/Styles';
import { FacebookF } from 'styled-icons/fa-brands/FacebookF.cjs';
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs';
import { LinkedinIn } from 'styled-icons/fa-brands/LinkedinIn.cjs';
import { connect } from 'airlytics';
import { StaticQuery, graphql } from 'gatsby';
import _ from 'lodash';

const ShareMessage = styled.div`
  font-size: 14px;
  color: ${p => p.theme.gray};
  text-transform: uppercase;
  text-align: center;
  ${media.lessThan('medium')`
    position: relative;
    right: 15px;
    display: inline-block;
  `}
`;

const Count = styled.div`
  font-size: 30px;
  color: ${p => p.theme.gray};
  text-align: center;
  ${media.lessThan('medium')`
    position: relative;
    top: 2px;
    display: inline-block;
    font-size: 20px;
  `}
`;

const Ribbon = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  right: auto;
  top: auto;
  left: auto;
  bottom: 0;
  text-align: center;
  visibility: hidden;
  -webkit-transition: opacity 1s ease-in;
  -moz-transition: opacity 1s ease-in;
  -o-transition: opacity 1s ease-in;
  -ms-transition: opacity 1s ease-in;
  transition: opacity 1s ease-in;

  ${media.greaterThan('medium')`
    display: none;
  `}

  ${p => p.show ? `
    visibility: visible;
    opacity: 1;
  ` : null }

  ${p => _.isBoolean(p.show) && !p.show ? `
    opacity: 0;
  ` : null }

  padding: 0;
  background-color: white;
`;

const Widget = styled.div`
  position: fixed;
  z-index: 9999;
  right: auto;
  left: 75px;
  top: 35vh;
  visibility: hidden;
  -webkit-transition: opacity 1s ease-in;
  -moz-transition: opacity 1s ease-in;
  -o-transition: opacity 1s ease-in;
  -ms-transition: opacity 1s ease-in;
  transition: opacity 1s ease-in;
  ${media.between("small", "medium")`
    left: 5px;
  `}
  ${media.lessThan("medium")`
    display: none;
  `}

  ${p => p.show ? `
    visibility: visible;
    opacity: 1;
  ` : null }

  ${p => _.isBoolean(p.show) && !p.show ? `
    opacity: 0;
  ` : null }
`;

const SocialLink = styled.div`
  text-align: center;
  position: relative;
  top: 2px;
  left: 1px;

  svg {
    width:20px;
    height:20px;
  }
`;

const Share = styled.div`
  cursor: pointer;
  background-color: ${p => p.color || 'transparent'};
  border-radius: 100px;
  padding: 12px 14px;
  margin: 2px 2px 10px 2px;
  position: relative;
  left: 2px;
  ${media.lessThan('medium')`
    display: inline-block;
    margin-left: 15px;
  `}
`;

const SCROLL_PERCENTAGE_THRESHOLD = 7;

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

  shareTwitter = (config) => {
    this.props.actions.shareTwitter(window.location.href, window.document.title, config.twitter.site);
  }

  getCounts(socialCounts) {
    return _.sum(_.values(socialCounts));
  }

  componentDidMount() {
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

  UNSAFE_componentWillReceiveProps(props) {
    if (this.props.lastAction.type !== props.lastAction.type) {
      if(props.lastAction.type === "GET_SOCIAL_COUNTS_SUCCESS") {
        this.setState({
          count: this.getCounts(props.page.socialCounts[window.location.pathname])
        });
      }
    }
  }

  renderCount() {
    if (this.state.count > 10) {
      return (
        <Count>{this.state.count}</Count>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Fragment>
        <StaticQuery
          query={graphql`
            query SocialScrollQuery {
              site {
                siteMetadata {
                  twitter {
                    site
                  }
                }
              }
            }
          `}
          render={data => {
            const config = data.site.siteMetadata;
            return (
              <Fragment>
                <Widget show={this.state.showWidget}>
                  <ShareMessage>Share</ShareMessage>
                  {this.renderCount()}
                  <Share color="#55ACEE" onClick={() => { this.shareTwitter(config) }}>
                    <SocialLink><Twitter color="white" /></SocialLink>
                  </Share>
                  <Share color="#4267B2" onClick={this.shareFacebook}>
                    <SocialLink ><FacebookF color="white" /></SocialLink>
                  </Share>
                  <Share color="#0077B5" onClick={this.shareLinkedIn}>
                    <SocialLink><LinkedinIn color="white" /></SocialLink>
                  </Share>
                </Widget>

                <Ribbon show={this.state.showRibbon}>
                  <ShareMessage>Share</ShareMessage>
                  {this.renderCount()}
                  <Share onClick={() => { this.shareTwitter(config) }}>
                    <SocialLink><Twitter color="#55ACEE" /></SocialLink>
                  </Share>
                  <Share onClick={this.shareFacebook}>
                    <SocialLink><FacebookF color="#4267B2" /></SocialLink>
                  </Share>
                  <Share onClick={this.shareLinkedIn}>
                    <SocialLink><LinkedinIn color="#0077B5" /></SocialLink>
                  </Share>
                </Ribbon>
              </Fragment>
              )
          }}
        />
      </Fragment>
    )
  }
}

export default connect()(SocialScroll);

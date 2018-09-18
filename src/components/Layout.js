import React, { Component, Fragment } from 'react';
import { StaticQuery, graphql } from "gatsby";
import State from '../state';
import { ThemeProvider } from 'styled-components';
import { connect } from 'airlytics';
import theme from 'components/Theme/Globals';
import NotificationSystem from 'react-notification-system';

import './Theme/Fonts.css'; // https://github.com/styled-components/styled-components/issues/1593
import './Theme/Normalize';
import './Theme/Globals';

class Layout extends Component {
  _notificationSystem = null;

  componentDidMount() {
    if (typeof window === "undefined") { return; }
    this._notificationSystem = this.refs.notificationSystem;
    this.props.actions.setPageName(window.location.pathname);
    if ('serviceWorker' in navigator) {
      window.navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(r => r.unregister());
      });
    }
  }

  componentDidUpdate() {
    this.props.actions.setPageName(window.location.pathname);
  }

  render() {
    State.set("notificationSystem", this._notificationSystem);

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <NotificationSystem ref="notificationSystem" />
          <StaticQuery
            query={graphql`
              query LayoutQuery {
                site {
                  siteMetadata {
                    hostname
                  }
                }
                allFile(filter: { relativeDirectory: { regex: "/logos|indicators/"}}) {
                  edges {
                    node {
                      relativeDirectory
                      name
                      childImageSharp {
                        fluid(maxWidth: 1240) {
                          ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              State.set(Object.assign({}, data.site.siteMetadata));
              return null;
            }}
          />
          {this.props.children}
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default connect()(Layout);

import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import classNames from 'classnames';
import fetch from "isomorphic-unfetch";
import { Config } from "../config.js";
import Router, { withRouter } from 'next/router';
import _ from 'lodash';

const PageWrapper = Comp => {
  class ConnectedComponent extends Component {
    static async getInitialProps(args) {
      let props = Comp.getInitialProps ? await Comp.getInitialProps(args) : null
      const { req, res } = args;
      let statusCode = 200;
      let redirectUrl;

      if (props) {
        if (props.statusCode === 404 && !props.isErrorPage) {
          const redirectsRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/redirects`);
          const redirects = await redirectsRes.json();
          let originUrl;
          if (typeof window === "object") {
            originUrl = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
          } else {
            originUrl = req.originalUrl.replace(/^\//, '').replace(/\/$/, '');
          }
          const redirect = _.find(redirects, ({ origin }) => origin === originUrl);
          if (redirect) {
            redirectUrl = redirect.url;
            statusCode = redirect.type;
          } else {
            redirectUrl = props.statusCode.toString();
            statusCode = props.statusCode;
          }
        }

        if (res && statusCode) {
          res.statusCode = statusCode;
        }

        if (!props.isErrorPage && redirectUrl) {
          if (typeof window === "object") {
            Router.push(redirectUrl);
          } else {
            res.redirect('/' + redirectUrl);
            res.end();
            res.finished = true;
          }
        }
      }

      const layoutRes = await fetch(
        `${Config.apiUrl}/wp-json/postlight/v1/layout`
      );
      const layout = await layoutRes.json();

      const headerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      );
      const headerMenu = await headerMenuRes.json();

      const footerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/footer-menu`
      );
      const footerMenu = await footerMenuRes.json();

      const sidebarRes = await fetch(
        `${Config.apiUrl}/wp-json/wp-rest-api-sidebars/v1/sidebars/ayb_sidebar`
      );
      const sidebar = await sidebarRes.json();

      return {
        layout,
        headerMenu,
        footerMenu,
        sidebar,
        ...props
      };
    }

    setClassNames() {
      const className = this.props.router.pathname === "/" ? "index" : this.props.router.pathname.replace(/^([^\/]*)\//, "").replace("/", "-")
      const { post, page } = this.props;
      return classNames(className, { post, page })
    }

    render() {
      return (
        <div className={this.setClassNames()}>
          <Header {...this.props} />
          <Comp {...this.props} />
          <Footer {...this.props} />
        </div>
      )
    }
  }

  return withRouter(ConnectedComponent);
}

export default PageWrapper;

import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss';
import HeaderMenu from "./HeaderMenu.js";
import ReactHtmlParser from 'react-html-parser';

class Header extends Component {

  render() {
    return (
      <div>
        <Head>
          {ReactHtmlParser(this.props.layout.head)}
          <style key="init-stylesheet" dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <HeaderMenu {...this.props} />
      </div>
    );
  }
}

export default Header;

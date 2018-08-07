import React, { Component } from 'react';
import processHtml from 'utils/processHTML'
import ReactHtmlParser from 'react-html-parser'
import PrismicDOM from 'prismic-dom'
import styled from 'styled-components';
import _ from 'lodash';

const Content = styled.div`
  //width: 900px;
  //margin: 100px auto;
  
  h2 {
    color: $black;
    font-family: $fontFamilyTitle;
    font-size: $h1FontSize / 1.3;
    text-transform: uppercase;
    margin:0;
    font-weight: 200;
    font-style: normal;
    letter-spacing: -3px;
  }
  
  h3 {
    color: $black;
    font-family: $fontFamilyTitle;
    font-size: $h3FontSize;
    margin:10px 0 0 0;
    font-weight: 300;
    font-style: normal;
  }
  
  h4 {
    margin-top: 30px;
    margin-left: -1.5px;
    line-height: 1.22;
    letter-spacing: -0.018em;
  }
  
  div,  p,  ul,  ol,  a {
    font-family: $fontFamily;
  }
  
  a,  a:hover {
    text-decoration: none;
    color: $brandPrimary;
    border-bottom: 2px solid;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  
  img {
    max-width: 100%;
  }
  
  * > ul, * > ol,  > ul,  > ol {
    padding-top: 15px;
  }
  
  * > ul li, * > ol li,  > ul li,  > ol li {
    text-indent: -0.7em;
    margin-left: 30px;
    position: relative;
    margin-bottom: 0px;
    top: -5px;
  }
  
  * > ul li:before, * > ol li:before,  > ul li:before,  > ol li:before {
    content: " ";
    font-weight: bold;
    display: inline-block;
    margin-right: 15px;
  }
  
  *:not(li) > ul, *:not(li) > ol, :not(li) > ul, :not(li) > ol {
    margin: 0 0 30px 0;
    list-style: none;
    padding: 30px;
    border-radius: 5px;
    display: block;
    width: fit-content;
  }
  
  *:not(li) > ul li, *:not(li) > ol li, :not(li) > ul li, :not(li) > ol li {
    margin-bottom: 14px;
  }
  
  *:not(li) > ol, :not(li) > ol {
    counter-reset: section;
  }
  
  *:not(li) > ol > li:before, :not(li) > ol > li:before {
    counter-increment: section;
    content: counters(section, ".") ".";
  }
  
  *:not(li) > ul > li:before, :not(li) > ul > li:before {
    font-size: 30px;
    content: "•";
  }
  
  p.small, div.small {
    font-size: 16px;
  }
  
  div, div:focus, p, p:focus {
    margin-top: 29px;
    word-break: break-word;
    word-wrap: break-word;
  }
  
  h1 + p,
  h2 + p,
  h3 + p,
  h1 + div,
  h2 + div,
  h3 + div {
    margin-top: 10px;
  }
  
  h4 + p,
  h4 + div {
    margin-top: 6px;
  }
  
  blockquote {
    border: none;
    padding: 20px 70px;
    position: relative;
    z-index: 1;
    margin: 0 0 20px;
    font-size: 17.5px;
  }
  
  blockquote div {
    font-style: italic;
  }
  
  blockquote:before {
    background: transparent url(/static/images/quotation-marks-left.png) no-repeat 0 0;
    content: "";
    position: absolute;
    width: 71px;
    height: 71px;
    background-size: 100% auto;
    top: 10px;
    left: 10px;
    z-index: -1;
  }
  
  blockquote:after {
    background: transparent url(/static/images/quotation-marks-right.png) no-repeat 0 0;
    content: "";
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 100% auto;
    position: absolute;
    width: 71px;
    height: 71px;
    left: auto;
    top: auto;
    bottom: 10px;
    right: 10px;
    z-index: -1;
  }
  
  form {
    width: 50%;
    margin: 0 auto;
  }
`

class RichText extends Component {
  render() {
    const { className } = this.props

    let body = _.isArray(this.props.body) ? PrismicDOM.RichText.asHtml(this.props.body) : this.props.body.html

    return (
      <Content className={className}>
        { ReactHtmlParser((body || this.props.children), { transform: processHtml }) }
      </Content>
    );
  }
}


export default RichText;

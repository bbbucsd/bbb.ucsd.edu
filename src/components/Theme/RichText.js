import React, { Component } from 'react';
import InnerHTML from 'utils/InnerHTML';
import { styled, media } from './Styles';

const Content = styled.div`
  h1 {
    --x-height-multiplier: 0.363;
    --baseline-multiplier: 0.157;
    font-style: normal;
    font-family: ${p => p.theme.fontFamilyTitle};
    font-size: ${p => p.theme.h2FontSize}px;
    color: ${p => p.theme.brandPrimary};
    margin-top: 63px;
    margin-left: -2.5px;
    margin-bottom: 0;
    line-height: 1.2;
    letter-spacing: -.028em;
    ${media.lessThan('medium')`
      font-size: 25px;
    `}
  }

  h2 {
    font-family: ${p => p.theme.fontFamilyTitle};
    font-size: ${p => p.theme.h2FontSize}px;
    color: ${p => p.theme.brandInfo};
    --x-height-multiplier: 0.363;
    --baseline-multiplier: 0.157;
    margin-top: 63px;
    margin-left: -2.5px;
    margin-bottom: 0;
    line-height: 1.04;
    letter-spacing: -.03em;
    word-wrap: break-word;
    word-break: break-word;
    ${media.lessThan('medium')`
      font-size: 25px;
    `}
  }

  h3 {
    font-family: ${p => p.theme.fontFamilyTitle};
    color: ${p => p.theme.brandInfo};
    --x-height-multiplier: 0.363;
    --baseline-multiplier: 0.157;
    margin-top: 34px;
    margin-bottom: 0;
    font-size: ${p => p.theme.h3FontSize}px;
    line-height: 1.15;
    letter-spacing: -.02em;
    word-wrap: break-word;
    word-break: break-word;
    ${media.lessThan('medium')`
      font-size: 25px;
    `}
  }

  h4 {
    --x-height-multiplier: 0.363;
    --baseline-multiplier: 0.157;
    color: ${p => p.theme.brandInfo};
    font-size: 25px;
    margin-top: 30px;
    margin-bottom: 0;
    margin-left: -1.5px;
    line-height: 1.22;
    letter-spacing: -.018em;
    word-wrap: break-word;
    word-break: break-word;
    ${media.lessThan('medium')`
      font-size: 25px;
    `}
  }

  ul + h1,
  ol + h1,

  ul + h2,
  ol + h2,

  ul + h3,
  ol + h3,

  ul + h4,
  ol + h4 {
    margin-top: 0;
  }

  div,  p,  ul,  ol,  a, strong {
    --x-height-multiplier: 0.35;
    --baseline-multiplier: 0.179;
    font-weight: 400;
    font-style: normal;
    font-family: ${p => p.theme.fontFamily};
    color: ${p => p.theme.darkGray};
    line-height: 1.58;
    letter-spacing: -.003em;
    word-wrap: break-word;
    word-break: break-word;
    font-size: 18px;
    ${media.greaterThan('small')`
      font-size: ${p => p.text === "smaller" ? '14' : p.theme.fontSize}px;
    `}
  }

  ${media.lessThan('medium')`
    iframe {
      width: 100%;
    }
  `}

  strong {
    color: ${p => p.theme.brandSecondary};
    font-weight: 900;
  }

  a,  a:hover {
    text-decoration: none;
    border-bottom: 2px solid;
    color: ${p => p.theme.brandInfo};
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.5s;
    word-wrap: break-word;
    word-break: break-word;
  }

  img {
    max-width: 100%;
  }

  * > ul, * > ol,  & > ul,  & > ol {
    padding-top: 15px;
  }

  * > ul li, * > ol li,  & > ul li,  & > ol li {
    text-indent: -.7em;
    margin-left: 30px;
    position: relative;
    margin-bottom: 0px;
    top: -5px;
  }

  * > ul li:before, * > ol li:before,  > ul li:before,  > ol li:before {
    content: " ";
    font-weight: bold;
    display: inline-block;
    margin-right: 5px;
    position: relative;
    top: 5px;
  }

  *:not(li) > ul, *:not(li) > ol, :not(li) > ul, :not(li) > ol {
    margin: 0 0 30px 0;
    list-style: none;
    padding: 30px;
    border-radius: 5px;
    display: block;
    width: fit-content;
    ${media.lessThan('medium')`
      padding: 0;
    `}
  }

  *:not(li) > ul li, *:not(li) > ol li, :not(li) > ul li, :not(li) > ol li {
    margin-bottom: 14px;
  }

  *:not(li) > ul li:before, *:not(li) > ol li:before, :not(li) > ul li:before, :not(li) > ol li:before {
    color: ${p => p.theme.brandInfo};
  }

  *:not(li) > ol, :not(li) > ol {
    counter-reset: section;
  }

  *:not(li) > ol > li:before, :not(li) > ol > li:before {
    counter-increment: section;
    content: counters(section, ".") ".";
  }

  *:not(li) > ul > li:before, :not(li) > ul > li:before {
    font-size: ${p => p.text === "smaller" ? 14 : 30}px;
    content: "•";
  }

  p.small, div.small {
    font-size: ${p => p.text === "smaller" ? 12 : 16}px;
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
    margin-top: 5px;
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
    const { body, className, text } = this.props

    return (
      <Content className={className} text={text}>
        <InnerHTML html={(body || this.props.children)} />
      </Content>
    );
  }
}

export default RichText;

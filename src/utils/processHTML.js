import React, { Fragment } from 'react';
import { convertNodeToElement } from 'react-html-parser';
import Link from 'components/Theme/Link';
import BlockQuote from 'components/Theme/BlockQuote';
import Code from 'components/Theme/Code';
import LazyLoad from 'react-lazyload';
import CodeBlock from 'react-copy-code';

const convertImg = (node, index) => {
  const el = convertNodeToElement(node, index);
  return (
    <Fragment>
      <LazyLoad>
        <img alt="" key={index + Math.random()} {...Object.assign({}, el.props, { children: null })} />
      </LazyLoad>
    </Fragment>
  );
}

const convertBlockQuote = (node, index) => {
  return (
    <BlockQuote key={index + Math.random()}>
      {node.children[0] ? node.children[0].data : null}
    </BlockQuote>
  );
}

const convertPre = (node, index) => {
  if (process.browser) {
    return (
      <CodeBlock highlight key={index + Math.random()}>
        <Code>
          {node.children[0] ? node.children[0].data : null}
        </Code>
      </CodeBlock>
    );
  } else {
    return null;
  }
}

const convertLink = (node, index) => {
  return (
    <Link to={node.attribs.href} key={index + Math.random()}>
      {node.children[0] ? node.children[0].data : null}
    </Link>
  );
}

const convertTextArea = (node, index) => {
  const el = convertNodeToElement(node, index);
  return (
    <textarea key={index + Math.random()} {...Object.assign({}, el.props, { children: null })} />
  );
}

const convertInput = (node, index) => {
  const el = convertNodeToElement(node, index);
  if (el.props.type.match(/text|email|phone/)) {
    return (
      <input key={index + Math.random()} {...Object.assign({}, el.props, { children: undefined, value: undefined })} />
    );
  } else {
    return el;
  }
}

const processNode = (node, index) => {
  switch (node.name) {
    case 'a':
      return convertLink(node, index);
    case 'textarea':
      return convertTextArea(node, index);
    case 'input':
      return convertInput(node, index);
    case 'blockquote':
      return convertBlockQuote(node, index);
    case 'img':
      return convertImg(node, index);
    case 'pre':
      return convertPre(node, index);
    default:
      return convertNodeToElement(node, index, (childNode, childIndex) => {
        return processNode(childNode, childIndex);
      });
  }
}

export default processNode;

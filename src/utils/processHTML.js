import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import Link from 'gatsby-link';


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
    default:
      return convertNodeToElement(node, index, (childNode, childIndex) => {
        return processNode(childNode, childIndex);
      });
  }
}

export default processNode;

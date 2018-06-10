import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import Link from 'next/link';
import { Config } from "../config.js";

const convertLink = (node, index) => {
  if (node.attribs.href && !!node.attribs.href.match(Config.hostname) && (!node.attribs.target || node.attribs.target === "_self") && node.children.length) {
    return (
      <Link href={node.attribs.href} key={index + Math.random()}>
        <a>{node.children[0].data}</a>
      </Link>
    );
  } else {
    return convertNodeToElement(node, index);
  }
}

const processLinks = (node, index) => {
  if (node.name === "a") {
    return convertLink(node, index);
  } else {
    return convertNodeToElement(node, index, (childNode, childIndex) => {
      if(childNode.name === 'a') {
        return convertLink(childNode, childIndex);
      } else {
        return convertNodeToElement(childNode, childIndex);
      }
    });
  }
}

export default processLinks;

import React, { Component } from 'react';
import { graphql } from 'gatsby'
import { StaticQuery } from 'gatsby';
import _ from 'lodash'
import { styled } from './Styles';

function getLeftQuote(props) {
  return _.find(props.images, (i) => i.node.name === 'quotation-marks-left').node.childImageSharp.fluid.tracedSVG;
}

function getRightQuote(props) {
  return _.find(props.images, (i) => i.node.name === 'quotation-marks-right').node.childImageSharp.fluid.tracedSVG;
}

const Quotes = styled.div`
    border: none;
    position: relative;
    z-index: 1;
    font-size: 17.5px;
    padding: 15px;

    &:before {
      background: url("${getLeftQuote}") no-repeat 0 0;
      content: "";
      position: absolute;
      width: 71px;
      height: 71px;
      background-size: 100% auto;
      top: 0px;
      left: -12px;
      z-index: -1;
      opacity: .5;
    }

    &:after {
      background: url("${getRightQuote}") no-repeat 0 0;
      content: "";
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: 100% auto;
      position: absolute;
      width: 71px;
      height: 71px;
      left: auto;
      top: auto;
      bottom: -10px;
      right: -10px;
      z-index: -1;
      opacity: .5;
    }
`

export default class extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
              query QuoteQuery {
                allFile(filter: { relativeDirectory: { regex: "/indicators/"}}) {
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
            const images = data.allFile.edges;
            return (
              <Quotes images={images}>
                {this.props.children}
              </Quotes>
            );
          }}
        />
    );
  }
}

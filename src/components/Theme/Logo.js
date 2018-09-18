import React, { Component } from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import Img from "gatsby-image";
import { StaticQuery } from 'gatsby';

export default class extends Component {

  findImage(data, type) {
    return _.find(data, (img) => img && img.node && img.node.childImageSharp && img.node.name === type);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
              query LogoQuery {
                site {
                  siteMetadata {
                    siteName
                  }
                }
                allFile(filter: { relativeDirectory: { regex: "/logos|icon/"}}) {
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
            let title = data.site.siteMetadata.siteName + " Logo";
            let img;
            if (this.props.type === "icon") {
              switch (this.props.color) {
                case 'blueWhite':
                  img = this.findImage(images, 'icon-blue-white');
                  break;
                case 'blue':
                  img = this.findImage(images, 'icon');
                  break;
                default:
                  img = this.findImage(images, 'icon-blue-white');
                  break;
              }
            } else {
              switch (this.props.color) {
                case 'colorWhite':
                  img = this.findImage('books-beyond-boundaries-color-white');
                  break;
                case 'white':
                  img = this.findImage('books-beyond-boundaries-white');
                  break;
                default:
                  img = this.findImage('books-beyond-boundaries-color-white');
                  break;
    }
            }
            if (img) {
              return (
                <Img
                  title={title}
                  alt={title}
                  fluid={img.node.childImageSharp.fluid}
                />
                );
            } else {
              return null;
            }
          }}
        />
    );
  }
}

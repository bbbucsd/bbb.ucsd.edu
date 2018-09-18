import React, { Component } from "react";
import { styled } from './Styles';
import _ from 'lodash';

const Container = styled.div`
  width: inherit;
  min-height: 250px;
  position: relative;
  border-left: 5px solid ${p => p.theme.darkSuccess};
  border-right: 5px solid ${p => p.theme.darkSuccess};
  border-radius: 5px;
  background: ${p => p.theme.lightSuccess};

  a {
    text-decoration: none;
    color: ${p => p.theme.brandInfo};
  }
`;

const Content = styled.div`
   padding-top: 10px;
   padding-bottom: 10px;
   font-weight: 400;
   font-style: normal;
   line-height: 1.58;
   letter-spacing: -0.003em;
   strong, b, div,  p,  a, li {
     font-size: 16px;
     margin-left: 7.5px;
   }
    * > ul,
    * > ol,  > ul,  > ol {
     padding-top: 15px;
   }
    * > ul li,
    * > ol li,  > ul li,  > ol li {
     text-indent: -0.7em;
     margin-left: 15px;
     position: relative;
     margin-bottom: 0px;
     top: -5px;
   }
    * > ul li:before,
    * > ol li:before,  > ul li:before,  > ol li:before {
     content: " ";
     font-weight: bold;
     display: inline-block;
     margin-right: 5px;
   }
    *:not(li) > ul,
    *:not(li) > ol, :not(li) > ul, :not(li) > ol {
     list-style: none;
     border-radius: 5px;
     display: block;
     width: fit-content;
     border: 0;
     padding: 0;
     margin: 8px;
     word-wrap: break-word;
     word-break: break-word;
   }
   *:not(li) > ul li,
    *:not(li) > ol li, :not(li) > ul li, :not(li) > ol li {
   }
   *:not(li) > ol, :not(li) > ol {
    counter-reset: section;
   }
    *:not(li) > ol > li:before, :not(li) > ol > li:before {
     counter-increment: section;
     content: counters(section, ".") ".";
     color: ${p => p.theme.darkGray};
   }
    *:not(li) > ul > li:before, :not(li) > ul > li:before {
     font-size: 30px;
     content: "•";
     color: ${p => p.theme.darkGray};
   }
`;

const Headline = styled.h4`
  color: ${p => p.theme.darkSuccess};
  font-family: ${p => p.theme.fontFamilyTitle};
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
`;

const BorderTopLeft = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 7.5%;
  border-color: ${p => p.theme.darkSuccess};
  border-style: solid;
`;

const BorderTopRight = styled.div`
  right: 0;
  top: 0;
  position: absolute;
  width: 7.5%;
  border-color: ${p => p.theme.darkSuccess};
  border-style: solid;
`;

const BorderBottomLeft = styled.div`
  left: 0;
  bottom: 0;
  position: absolute;
  width: 7.5%;
  border-color: ${p => p.theme.darkSuccess};
  border-style: solid;
`;

const BorderBottomRight = styled.div`
  right: 0;
  bottom: 0;
  position: absolute;
  width: 7.5%;
  border-color: ${p => p.theme.darkSuccess};
  border-style: solid;
`;

export default class HighlightContent extends Component {

  render() {
    return (
      <Container {...this.props}>
        <BorderTopLeft />
        <BorderTopRight />
        <BorderBottomLeft />
        <BorderBottomRight />
        <Content>
          <Headline>{_.isArray(this.props.headline) ? this.props.headline[0] && this.props.headline[0].text : this.props.headline.text }</Headline>
          {this.props.children}
        </Content>
      </Container>
    );
  }

}

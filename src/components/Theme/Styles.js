import React, { Component } from 'react';
import Validator from 'utils/validator';
import styled, { css } from 'styled-components';
import { screenSize } from 'styled-config';

const sizes = {
  desktop: `(min-width: ${screenSize.lg})`,
  tablet: `(min-width: ${screenSize.md})`,
  mobile: `(min-width: ${screenSize.sm})`
}

class Styles extends Component {

  // Iterate through the sizes and create a media template
  static media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media ${ sizes[label] } {
        ${css(...args)}
      }
    `

    return acc
  }, {})

  static backgroundImage = (backgroundImage) => {
    if (Validator.isImage(backgroundImage)) {
      return `
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-image: url('${backgroundImage}');
      `;
    }
  };

  static backgroundColor = (backgroundColor) => {
    return Validator.isColor(backgroundColor) ? `
      background-color: ${backgroundColor};
  ` : null
  };

  static hidden = (hidden) => {
    if (hidden === true) {
      return css`display:none;`
    }
  };
}

export default Styles
export styled from 'styled-components';
export { css } from 'styled-components';
export { keyframes } from 'styled-components';
export media from "styled-media-query";

import React, { Component } from 'react'
import Validator from 'utils/validator'
import styled, { css } from 'styled-components';

const sizes = {
  desktop: '(min-width: 1200px)',
  tablet: '(min-width: 481px) and (max-width: 1199px)',
  mobile: '(max-width: 480px)'
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
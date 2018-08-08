import React, { Component } from 'react';
import Styles, { styled, css} from './Styles';

export default styled.div`
  position: relative;
  background-color: transparent;
  z-index: 4;
  border-radius: ${p => p.radius || '10'}px;

  &:before, &:after {
    content: "";
    position: absolute;
    border-radius: ${p => p.radius || '10'}px;
  }

  &:before {
    top: -${p => p.width || '4'}px;
    left: -${p => p.width || '4'}px;
    right: -${p => p.width || '4'}px;
    bottom: -${p => p.width || '4'}px;
    background-image: -webkit-gradient(radial, right top, 10, 90% 0%, 150, from(${p => p.theme.brandSuccess}), to(${p => p.theme.brandInfo}));
    background-image: -webkit-radial-gradient(right top, 100% 600px, ${p => p.theme.brandSuccess}, ${p => p.theme.brandInfo});
    background-image: -moz-radial-gradient(right top, farthest-corner, ${p => p.theme.brandSuccess} 0%, ${p => p.theme.brandInfo} 72%);
    z-index: -1;
  }

  &:after {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${p => p.innerColor || p.theme.white};
    z-index: -1;
  }
`

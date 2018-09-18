import React, { Component } from 'react';
import { styled } from 'components/Theme/Styles';
import { KeyboardArrowLeft } from 'styled-icons/material/KeyboardArrowLeft.cjs'

const BackButton = styled.a`
  position: absolute;
  left: 55px;
  top: 0px;
  line-height: 25px;
  cursor: pointer;
`;

const BackArrow = styled(KeyboardArrowLeft)`
  display: block;
  position: relative;
  top: 32px;
  left: -35px;
  font-size:32px;
`;

class SimpleBackButton extends Component {

  back() {
    window.history.back()
  }

  render() {
    return (
      <div>
        <BackButton onClick={ this.back }><BackArrow /> Back</BackButton>
      </div>
    );
  }
}



export default SimpleBackButton;

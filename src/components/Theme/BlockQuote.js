import Styles, { styled, css, media, keyframes } from './Styles';

export default styled.div`
    border: none;
    position: relative;
    z-index: 1;
    font-size: 17.5px;
    padding: 15px;

    &:before {
      background: transparent url(./quotation-marks-left.png) no-repeat 0 0;
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
      background: transparent url(./quotation-marks-right.png) no-repeat 0 0;
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

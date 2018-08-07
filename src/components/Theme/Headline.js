import React, { Component } from 'react';
import Styles, { styled, css} from './Styles';
import _ from 'lodash';

const H1 = styled.h1`
  color: ${props => props.color || props.theme.darkGray};
  font-family: ${props => props.theme.fontFamilyTitle};
  font-size: ${props => props.theme.h1FontSize}px;
  margin:0;
  font-weight: 300;
  font-style: normal;
`

const H2 = styled.h2`
  color: ${props => props.color || props.theme.darkGray};
  font-family: ${props => props.theme.fontFamilyTitle};
  font-size: ${props => props.theme.h2FontSize}px;
  margin:10px 0 0 0;
  font-weight: 200;
  font-style: normal;
`

const H3 = styled.h3`
  color: ${props => props.color || props.theme.darkGray};
  font-family: ${props => props.theme.fontFamilyTitle};
  font-size: ${props => props.theme.h3FontSize}px;
  margin:10px 0 0 0;
  font-weight: 200;
  font-style: normal;
`

class ThemeHeadline extends Component {
  textCopy() {
    this.text = _.at(this.props.text, ['text', '[0]text']);
    this.text = _.compact(this.text);
    return _.first(this.text) || this.props.children;
  }

  render() {
    const { color, h1, h2, h3, className } = this.props;

    return (
      <React.Fragment>
        { h1 && <H1 className={className} color={color}>{this.textCopy()}</H1> }
        { h2 && <H2 className={className} color={color}>{this.textCopy()}</H2> }
        { h3 && <H3 className={className} color={color}>{this.textCopy()}</H3> }
      </React.Fragment>
    );
  }
}


export default ThemeHeadline;

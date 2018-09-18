import React, { Fragment, Component } from 'react';
import { styled, media } from './Styles';
import _ from 'lodash';
import titlize from 'utils/titlize';

const H1 = styled.h1`
  color: ${p => p.color || p.theme.brandPrimary};
  font-family: ${p => p.theme.fontFamilyTitle};
  margin:0 auto;
  font-weight: bold;
  font-style: normal;
  width: 100%;
  padding: 0 10px;
  font-size: 30px;
  ${media.greaterThan('medium')`
    font-size: ${p => p.theme.h1FontSize}px;
    width: 75%;
  `}
`;

const H2 = styled.h2`
  color: ${p => p.color || p.theme.brandInfo};
  font-family: ${p => p.theme.fontFamily};
  margin:10px auto 0 auto;
  font-style: normal;
  font-size: 25px;
  width: initial;
  width: 100%;
  padding: 0 10px;
  ${media.greaterThan('small')`
    font-size: 30px;
  `}
  ${media.greaterThan('medium')`
    width: 75%;
    font-size: ${p => p.theme.h3FontSize}px;
  `}
`;

const H3 = styled.h3`
  color: ${p => p.color || p.theme.brandInfo};
  font-family: ${p => p.theme.fontFamily};
  margin:10px 0 0 0;
  font-weight: 500;
  font-style: normal;
  width:100%;
  font-size: 30px;
  ${media.greaterThan('medium')`
    font-size: ${p => p.theme.h3FontSize}px;
  `}
`;

class Headline extends Component {

  // support both prismic preview JSON and graphql JSON
  textCopy() {
    if (typeof this.props.text === "string") {
      return this.props.text;
    } else {
      this.text = _.at(this.props.text, ['text', '[0]text']);
      this.text = _.compact(this.text);
      return _.first(this.text) || this.props.children;
    }
  }

  render() {
    const { h1, h2, h3 } = this.props;

    return (
      <Fragment>
        { h1 && <H1 {...this.props}>{titlize(this.textCopy())}</H1> }
        { h2 && <H2 {...this.props}>{titlize(this.textCopy())}</H2> }
        { h3 && <H3 {...this.props}>{titlize(this.textCopy())}</H3> }
      </Fragment>
    );
  }
}


export default Headline;

import React, { Fragment, Component } from 'react';
import Styles, { styled, css} from './Styles';
import _ from 'lodash';

const H1 = styled.h1`
  color: ${p => p.color || p.theme.brandPrimary};
  font-family: ${p => p.theme.fontFamilyTitle};
  font-size: ${p => p.theme.h1FontSize}px;
  margin:0 auto;
  font-weight: bold;
  font-style: normal;
  width: 75%;
`;

const H2 = styled.h2`
  color: ${p => p.color || p.theme.brandInfo};
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.theme.h3FontSize}px;
  margin:10px auto 0 auto;
  font-style: normal;
  width: 75%;
`;

const H3 = styled.h3`
  color: ${p => p.color || p.theme.brandInfo};
  font-family: ${p => p.theme.fontFamily};
  font-size: ${p => p.theme.h3FontSize}px;
  margin:10px 0 0 0;
  font-weight: 500;
  font-style: normal;
  width:100%;
`;

class Headline extends Component {

  // support both prismic preview JSON and graphql JSON
  textCopy() {
    this.text = _.at(this.props.text, ['text', '[0]text']);
    this.text = _.compact(this.text);
    return _.first(this.text) || this.props.children;
  }

  render() {
    const { h1, h2, h3 } = this.props;

    return (
      <Fragment>
        { h1 && <H1 {...this.props}>{this.textCopy()}</H1> }
        { h2 && <H2 {...this.props}>{this.textCopy()}</H2> }
        { h3 && <H3 {...this.props}>{this.textCopy()}</H3> }
      </Fragment>
    );
  }
}


export default Headline;

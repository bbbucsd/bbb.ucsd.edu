import React, { Component } from 'react';
import ThemeHeadline from './Headline';
import Styles, { styled, css} from './Styles';

const Headline = styled(ThemeHeadline)`
  margin: 0;
  padding: 0;
  font-weight: 200;
`;

const SmallText = styled.div`
  font-weight: 200;
  font-size:14px;
`;

class Highlight extends Component {
  render() {
    const { largeText, smallText } = this.props;

    return (
      <div>
        <Headline h2 color={this.props.color}>{largeText}</Headline>
        <SmallText color={this.props.color}>{smallText}</SmallText>
      </div>
    );
  }
}


export default Highlight;

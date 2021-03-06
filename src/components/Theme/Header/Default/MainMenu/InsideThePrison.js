import React, { Component } from 'react'
import Link from 'components/Theme/Link'
import { styled } from 'components/Theme/Styles';

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  white-space: nowrap;
`;

const MainLink = styled(Link)`
  font-weight: 400;
  color:${props => props.floating ? props.theme.white : (props.color || props.theme.white)};
  &:visited {
    color:${props => props.floating ? props.theme.white : (props.color || props.theme.white)};
  }
`;

export default class extends Component {

  render() {
    const { color, floating } = this.props;

    return (
      <Wrapper>
        <MainLink color={color} floating={floating} to="/prison-rules">Prison Rules</MainLink>
      </Wrapper>
    );
  }
}

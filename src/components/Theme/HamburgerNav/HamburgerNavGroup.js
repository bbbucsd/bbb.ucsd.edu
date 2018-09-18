import React, { Component } from 'react';
import { styled } from '../Styles';

const Wrapper = styled.ul`
  flex-direction: column;
  justify-content: space-between;
  width:100%;
  position: relative;
`;

const NavGroup = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: space-between;
  width:100%;
  position: relative;
  text-align: left;
  align-items: center;
  margin-top: 20px;
`;

const Items = styled.ul`
  width: 100%;
  padding: 0;
`;

const Title = styled.li`
  font-size: 11px;
  font-weight: bold;
  width:90%;
  margin-top: 25px;
  text-transform: uppercase;
  color: ${p => p.theme.white};
  padding-bottom:10px;
  line-height: 12px;
`;

class HamburgerNavGroup extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <Wrapper>
        <NavGroup>
          <Items>
            { title != null ? <Title>{ title }</Title> : '' }
            { children }
          </Items>
        </NavGroup>
      </Wrapper>
    );
  }
}

export default HamburgerNavGroup;

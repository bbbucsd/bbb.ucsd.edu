import React, { Component } from 'react';
import Styles, { styled, css} from '../Styles';

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
`;

const Items = styled.ul`
  width: 100%;
  padding: 0;
`;

const Title = styled.li`
  font-size: 13px;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 5px;
  padding: 12px 0;
  text-transform: uppercase;
  width:90%;
`;

class SubNavGroup extends Component {
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

export default SubNavGroup;

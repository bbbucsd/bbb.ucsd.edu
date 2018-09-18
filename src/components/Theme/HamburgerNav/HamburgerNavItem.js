import React, { Fragment, Component } from 'react';
import Link from '../Link';
import { styled } from '../Styles';

const Item = styled.li`
  padding: 1px 0;
  font-size: 14px;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  margin-top: 25px;

  a {
    line-height: 25px;
    font-size: 20px;
    color: ${p => p.theme.white};
    text-decoration-color: ${p => p.theme.white};
    &:visited {
      color: ${p => p.theme.white}
    }
  }
`;

class HamburgerNavItem extends Component {
  isActive() {
    if (typeof window === "undefined") { return false; }
    return !!this.props.to.match(new RegExp(window.location.pathname))
  }

  render() {
    const { onClick } = this.props;
    return (
      <Fragment>
        <Item onClick={onClick} isActive={this.isActive()}>
          { this.props.to ? <Link to={this.props.to || ''}>{this.props.children}</Link> : this.props.children }
        </Item>
      </Fragment>
    );
  }
}

export default HamburgerNavItem;

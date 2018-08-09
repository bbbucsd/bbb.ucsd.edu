import React, { Component } from 'react'
import Link from 'components/Theme/Link'
import Styles, { styled, css} from 'components/Theme/Styles';

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  white-space: nowrap;
`;

const MainLink = styled(Link)`
  font-weight: 400;
  color:${props => props.floating ? props.theme.black : props.theme.white};
  &:visited {
    color:${props => props.floating ? props.theme.black : props.theme.white};
  }
`;

class HowToBuyMenu extends Component {

  render() {
    const { floating } = this.props;

    return (
      <Wrapper>
        <MainLink floating={floating} to="/how-to-buy">How to buy</MainLink>
      </Wrapper>
    );
  }
}

export default HowToBuyMenu;

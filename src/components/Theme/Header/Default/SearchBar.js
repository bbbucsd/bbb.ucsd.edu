import React, { Component } from 'react';
import Styles, { styled, css, media } from 'components/Theme/Styles';
import { Search } from 'styled-icons/material/Search.cjs'


const SearchWrapper = styled.div`
  position:relative;
`;

const SearchInner = styled.div`
  position:absolute;
  top:-17px;
  right:0;
  width:${p => p.searching ? '200px' : '150px'};
  transition: all 0.5s;
`

const SearchIcon = styled(Search)`
  height:25px;
  width:20px;
  cursor:pointer;
  color: ${p => p.floating ? '#FFF' : '#fff' };

  ${media.lessThan("medium")`
    display:none;
  `}
`;

const SearchField = styled.input`
  background:transparent;
  border:0;
  width:calc(100% - 20px);
  border-bottom: 1px solid ${p => p.floating ? '#fafafa' : '#fafafa' };;
  color: ${p => p.floating ? '#fff' : '#fff' };
  font-size:14px;

  ${media.lessThan("medium")`
    display:none;
  `}
`

class SearchBar extends Component {

  state = {
    searching: false
  };

  toggleSearch = () => {
    this.setState({ searching: !this.state.searching });
  }

  render() {
    const { floating } = this.props
    return (
      <SearchWrapper>
        <SearchInner searching={this.state.searching}>
          <SearchIcon hide={this.state.drawer} floating={floating} />
          <SearchField type="text" floating={floating} onFocus={this.toggleSearch} onBlur={this.toggleSearch} />
        </SearchInner>
      </SearchWrapper>
    );
  }
}

export default SearchBar;

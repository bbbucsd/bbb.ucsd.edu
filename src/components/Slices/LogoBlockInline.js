import React, { Component } from 'react';
import Styles, { styled, css} from 'components/Theme/Styles';
import Globals from 'components/Theme/Globals';

const Container = styled.div`
  background-color: ${p => p.theme.brandSecondary};
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const Logos = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  max-width: 75rem;
  width: 87.08333333%;
  padding: 3em;
`;

const Label = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .8em;
  font-weight; bold;
  letter-spacing: .05em;
  text-align: left;
  text-transform: uppercase;
  height: auto;
  max-height: 50px;
  max-width: 75rem;
  width: 100%;
  color: ${p => p.theme.white};
`;

const LogoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  max-width: 75rem;
  width: 87.08333333%;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 50px;
  padding-left: 2vw;
  padding-right: 2vw;
`;

class LogoBlockInline extends Component {

  render() {
    const slice = this.props.slice
    const items = slice.items;

    const {
      height,
      align,
      justify,
      label,
    } = slice.primary

    return (
      <Container>
        <Logos>
          <Label>{label}:</Label>
          {items.map((item, i) => {
              return (
                <LogoItem>
                  <Logo alt={item.logo.alt} src={item.logo.url} />
                </LogoItem>
              )
            }
          )}
        </Logos>
      </Container>
    )
  }
}

export default LogoBlockInline;

export const query = graphql`
  fragment LogoBlockInline on LogoBlockInline {
    __typename
    primary {
      label
      height
      align
      justify
    }
    items {
      logo {
        url
      }
    }
  }
`;

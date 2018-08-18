import React, { Component } from 'react';
import { styled, css, media } from 'components/Theme/Styles';
import Globals from 'components/Theme/Globals';

const Container = styled.div`
  background-color: ${p => p.theme.brandSecondary};
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 1rem;
  ${media.greaterThan("small")`
    padding: 0;
  `}
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
  ${media.greaterThan("small")`
    padding: 3em;
  `}
`;

const Label = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight; bold;
  letter-spacing: .05em;
  text-align: left;
  text-transform: uppercase;
  height: auto;
  max-height: 50px;
  max-width: 75rem;
  width: 100%;
  color: ${p => p.theme.white};
  margin-bottom: 10px;
  font-size: .5em;
  ${media.greaterThan("small")`
    font-size: .8em;
    margin-bottom: 0px;
  `}
  ${media.lessThan("medium")`
    display: none;
  `}
`;

const MobileLabel = styled(Label)`
  ${media.lessThan("medium")`
    display: flex;
  `}
  ${media.greaterThan("small")`
    display: none;
  `}
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
  padding-left: 2vw;
  padding-right: 2vw;
  max-height: 30px;
  ${media.greaterThan("small")`
    max-height: 50px;
  `}
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
        <MobileLabel>{label}</MobileLabel>
        <Logos>
          <Label>{label}:</Label>
          {items.map((item, i) => {
              return (
                <LogoItem>
                  <Logo alt={item.logo.alt || (item.logo.url && item.logo.url.split("_")[1].split(".")[0])} src={item.logo.url} />
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

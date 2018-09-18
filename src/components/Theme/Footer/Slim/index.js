import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import Logo from 'components/Theme/Logo';
import { styled, media } from 'components/Theme/Styles';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';
import { connect } from 'airlytics';

const FooterLink = styled(Link)`
  color: ${p => p.theme.white};
  display: block;
  padding-bottom: 5px;
  margin-top: 5px;
  font-size: 16px;
  word-break: break-word;
  border-bottom: 1px solid #27333C;
`;

const FooterContainer = styled.div`
  background-color: ${p => p.theme.brandSecondary};
  color: ${p => p.theme.white};
`;

const LinkColumn = styled(Column)`
  display: initial;
  padding-top: 15px;
  padding-bottom: 15px;
  ${media.between('small', 'medium')`
    padding: 0 0 15px 0;
  `}
  ${media.greaterThan('medium')`
    text-align: left;
    padding: 0;
  `}
`;

const DesktopColumn = styled(LinkColumn)`
  display: none;
  ${media.greaterThan('medium')`
    text-align: right;
    display: initial;
  `}
`;

const MobileColumn = styled(LinkColumn)`
  display: initial;
  ${media.greaterThan('medium')`
    display: none;
  `}
`;

const LogoLink = styled(Link)`
  ${media.lessThan("medium")`
    justify-content: center;
    display: flex;
  `}
  border-radius: 50px;
  position: relative;
  top: -40px;
  background-color: ${p => p.theme.brandSecondary};
  padding: 3px 5px 5px 0px;
  .gatsby-image-wrapper {
    width: 75px;
  }
`;

const BrandColumn = styled(Column)`
  align-items: center;
  display: flex;
  position: relative;
  top: -45px;
  padding-top: 50px;
  margin-bottom: -75px;
  ${media.lessThan("medium")`
    flex: 0 0 100%;
    justify-content: center;
    align-content: center;
  `}
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div>
          <Container>
            <Row justifyContent="center" alignContent="center" alignItems="center" textAlign="center">
              <DesktopColumn sm={2}>
                <FooterLink to="/start">Start Here</FooterLink>
              </DesktopColumn>

              <DesktopColumn sm={2}>
                <FooterLink to="/about">About</FooterLink>
              </DesktopColumn>

              <BrandColumn sm={4} justifyContent="center" alignContent="left">
                <LogoLink to="/">
                  <Logo type="icon" />
                </LogoLink>
              </BrandColumn>

              <MobileColumn sm={2}>
                <FooterLink to="/start">Start Here</FooterLink>
              </MobileColumn>

              <MobileColumn sm={2}>
                <FooterLink to="/about">About</FooterLink>
              </MobileColumn>

              <LinkColumn sm={2}>
                <FooterLink to="/learn">Learn</FooterLink>
              </LinkColumn>

              <LinkColumn sm={2}>
                <FooterLink to="/resources">Resources</FooterLink>
              </LinkColumn>
            </Row>
          </Container>
        </div>
      </FooterContainer>
    );
  }
}

export default connect()(Footer);

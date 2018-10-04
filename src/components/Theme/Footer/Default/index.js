import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import Logo from 'components/Theme/Logo';
import flag from './american-flag.png'
import Styles, { styled, css, media } from 'components/Theme/Styles';
import { Instagram } from 'styled-icons/fa-brands/Instagram.cjs';
import { Facebook } from 'styled-icons/fa-brands/Facebook.cjs';
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin.cjs';
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';

const FooterBelow = styled.div`
  font-size: 12px;
`;

const FooterLink = styled(Link)`
  color: ${p => p.theme.brandLight};
  display: block;
  padding-bottom: 5px;
  margin-top: 5px;
  font-size: 12px;
  word-break: break-word;
  border-bottom: 1px solid #27333C;
`;

const FooterContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: ${p => p.theme.brandSecondary};
  color: ${p => p.theme.brandLight};
`;

const NavTitle = styled.h5`
  margin-top: 0;
  word-break: break-word;
  color: ${p => p.theme.brandInfo};
  margin-bottom: 0;
  font-size: 18px;
  ${media.greaterThan('large')`
    font-size: 21px;
  `}
  ${media.between("medium", "large")`
    font-size: 16px;
  `};
`;

const Divider = styled.hr`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${p => p.theme.brandLight}
  ${media.greaterThan('small')`
    display: none;
  `}
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  width: 100%;

  ${media.lessThan("medium")`
    justify-content: center;
  `};

`;

const SocialSpacer = styled.div`
  ${media.greaterThan("medium")`
    flex: 1 1 auto;
    width: auto;
  `}
`
const SocialLink = styled.div`
  width: 75px;
  flex: 0 0 auto;
  font-size: 28px;
  color: ${props => props.theme.brandLight};
  text-align: center;
  line-height: 75px;
  ${media.between("medium", "large")`
    width:55px;
  `};

  a {
    color: ${props => props.theme.brandLight};
  }

  svg {
    fill: ${props => props.theme.white};
    width:30px;
    height:30px;
    ${media.between("medium", "large")`
      width:30px;
      height:30px;
    `};
    position:relative;
    top:4px;
  }
`;

const LinkColumn = styled(Column)`
  display: initial;
  ${media.lessThan('medium')`
    display: none;
  `}
`;

const LogoLink = styled(Link)`

  .gatsby-image-wrapper {
    width: 175px;
    ${media.between("medium", "large")`
      width: 150px;
      margin-left: 25px;
      max-width: 150px;
    `}
  }
`;

const BrandColumn = styled(Column)`
  ${media.lessThan("medium")`
    flex: 0 0 100%;
    justify-content: center;
    align-content: center;
  `}
`;

//.footer {
  //.navbar-brand {
    //max-width: 150px;
    //padding: 0;
    //margin: 0;
  //}
//}

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="footer-above">
          <Container>
            <Row>
              <BrandColumn sm={4} justifyContent="center" alignContent="left">
                <LogoLink to="/">
                  <Logo />
                </LogoLink>

                <Divider />
              </BrandColumn>

              <LinkColumn sm={2}>
                <NavTitle>Start Here</NavTitle>
                <FooterLink to="/about-us">
                  About Us
                </FooterLink>
                <FooterLink to="/how-we-work">
                  How we Work
                </FooterLink>
              </LinkColumn>

              <LinkColumn sm={3}>
                <NavTitle>Get Involved</NavTitle>
                <FooterLink to="/how-to-volunteer">
                  How to Volunteer
                </FooterLink>
                <FooterLink to="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fbbb.ucsd.edu">
                  Share Books Beyond Boundaries
                </FooterLink>
                <FooterLink to="https://ucsd.us12.list-manage.com/subscribe?u=3f52e7d7a72ee5f354cac7ec5&id=bfc189490d">
                  Join The Newsletter
                </FooterLink>
              </LinkColumn>

              <LinkColumn sm={3}>
                <NavTitle>Resources</NavTitle>
                <FooterLink to="/prison-rules">
                  Prison Rules
                </FooterLink>
                <FooterLink to="/contact-info">
                  Contact Info
                </FooterLink>
              </LinkColumn>
            </Row>
          </Container>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

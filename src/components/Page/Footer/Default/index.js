import React, { Component } from 'react';
import Link from 'components/Theme/Link';
import flag from './american-flag.png'
import Styles, { styled, css, media } from 'components/Theme/Styles';
import { Youtube } from 'styled-icons/fa-brands/Youtube.cjs'
import { Facebook } from 'styled-icons/fa-brands/Facebook.cjs'
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs'
import { Linkedin } from 'styled-icons/fa-brands/Linkedin.cjs'

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.brandSecondary};
  width: 100%;
  color: ${props => props.theme.brandSecondaryLinks};
  ${media.greaterThan("medium")`
    height: 500px;
  `}
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.brandSecondaryBorder};
  
  ${media.lessThan("medium")`
    justify-content:center;
  `};
`;

const SocialSpacer = styled.div`
  ${media.greaterThan("medium")`
    flex: 1 1 auto;
    width: auto;
  `}
`
const SocialLink = styled.div`
  border-left: 1px solid ${props => props.theme.brandSecondaryBorder};
  width: 75px;
  flex: 0 0 auto;
  font-size: 28px;
  color: ${props => props.theme.brandSecondaryLinks};
  text-align: center;
  line-height: 75px;
  
  a {
    color: ${props => props.theme.brandSecondaryLinks};
  }
  
  ${media.lessThan("medium")`
    &:nth-child(2) {
      border-left: none;
    }
  `};
  
  svg {
    fill: ${props => props.theme.white};
    width:30px;
    height:30px;
    position:relative;
    top:4px;
  }
`;

const Nav = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-around;
  ${media.lessThan("medium")`
    flex-direction: column;
  `};
`;

const Section = styled.div`
  margin: 0 25px;
  width: 200px;
`;

const Header = styled.h3`
  width: 100%;
  text-align: left;
  color: #fafafa;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.brandSecondaryBorder};
  margin-bottom: 5px;
  padding-left: 0;
  padding-right: 0;
  text-transform: uppercase;
  
  ${media.lessThan("medium")`
    padding-bottom:10px;
    margin-bottom: 0px;
  `};
`;

const Links = styled.ul`
  list-style-type: none;
  margin: 25px 0;
  padding: 0;
  text-align: left;
  font-size: 14px;
  line-height: 24px;
  
  a {
    color: #fafafa;
  }
  
  ${media.lessThan("medium")`
    margin: 10px 0;
  `};
`;

const Legal = styled.div`
  border-top: 1px solid ${props => props.theme.brandSecondaryBorder};
  display: flex;
  width: 100%;
  margin-top: 30px;
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  
  ${media.lessThan("medium")`
    flex-direction:column-reverse;
    justify-content: space-around;
  `};
`;

const LegalLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  margin-left:50px;
  
  ${media.lessThan("medium")`
    flex-direction:row-reverse;
    margin:25px;
    justify-content: space-between;
  `};
`;

const LegalLink = styled.div`
  ${media.greaterThan("medium")`
    margin-right: 50px;
  `};
`;

const LegalRight = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  text-align: left;
  margin-right:50px;
  
  ${media.lessThan("medium")`
    flex-direction:column;
    margin:25px;
    text-align:center;
  `};
`;

const Flag = styled.img`
  height: 14px;
  margin-left: 5px;
  position: relative;
  top: 2px;
`



class Footer extends Component {
  render() {

    return (
      <div>
        <FooterWrapper>
          <SocialSection>
            <SocialSpacer />
            <SocialLink><Link to="https://www.youtube.com/user/proluxe"><Youtube /></Link></SocialLink>
            <SocialLink><Link to="https://www.facebook.com/Proluxe"><Facebook /></Link></SocialLink>
            <SocialLink><Link to="https://twitter.com/proluxe"><Twitter /></Link></SocialLink>
            <SocialLink><Link to="https://www.linkedin.com/company/doughpro"><Linkedin /></Link></SocialLink>
          </SocialSection>


          <div>
            <Nav>
              <Section>
                <Header>Company</Header>
                <Links>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/press">Press</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                </Links>
              </Section>
              <Section>
                <Header>Products</Header>
                <Links>
                  <li><Link to="/products/smart-ovens">Smart Ovens</Link></li>
                  <li><Link to="/products/pizza-presses">Pizza Presses</Link></li>
                  <li><Link to="/products/tortilla-presses">Tortilla Presses</Link></li>
                  <li><Link to="/products/grills">Grills</Link></li>
                  <li><Link to="/products/bun-carmalizers">Bun Carmalizers</Link></li>
                </Links>
              </Section>
              <Section>
                <Header>Service &amp; Support</Header>
                <Links>
                  <li><Link to="/help/training">Training</Link></li>
                  <li><Link to="/help/technical-support">Technical Support</Link></li>
                  <li><Link to="/help/find-service-provider">Find a Service Provider</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                </Links>
              </Section>
              <Section>
                <Header>Resources</Header>
                <Links>
                  <li><Link to="/resources/demos">Demos</Link></li>
                  <li><Link to="/resources/events">Events</Link></li>
                  <li><Link to="/resources/downloads">Downloads</Link></li>
                </Links>
              </Section>
            </Nav>

            <Legal>
              <LegalLeft>
                <LegalLink>&copy; Proluxe, Inc {new Date().getFullYear()}</LegalLink>
                <LegalLink><Link to="/terms">Terms of use</Link></LegalLink>
                <LegalLink><Link to="/privacy">Privacy Policy</Link></LegalLink>
              </LegalLeft>
              <LegalRight>
                Designed &amp; Manufactured in California <Flag alt="Made in California" src={flag} />
              </LegalRight>
            </Legal>
          </div>
        </FooterWrapper>
      </div>
    );
  }
}

export default Footer;

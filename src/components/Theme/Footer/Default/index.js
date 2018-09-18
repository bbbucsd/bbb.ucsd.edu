import React, { Component, Fragment } from 'react';
import Link from 'components/Theme/Link';
import Logo from 'components/Theme/Logo';
import Icon from 'components/Theme/Icon';
import Button from 'components/Theme/Button';
import { styled, media } from 'components/Theme/Styles';
import {
  Container,
  Row,
  Column
} from 'styled-bootstrap-components';
import { connect } from 'airlytics';

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
  margin-top: 25px;
  margin-bottom: 50px;
  width: 90%;
  background-color: ${p => p.theme.brandLight}
`;

const MobileDivider = styled(Divider)`
  margin-top: 15px;
  margin-bottom: 15px;
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
  ${media.lessThan("medium")`
    justify-content: center;
    display: flex;
  `}

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

const FooterBelow = styled.div`
  justify-content: center;
  display: flex;
  font-size: 12px;
  margin-top: 15px;
  a {
    color: ${props => props.theme.brandLight};
    &:visited,
    &:hover {
      color: ${props => props.theme.brandLight};
    }
  }
`;

const FooterAbove = styled.div`
  padding: 25px 25px 50px 25px;
  justify-content: center;
  display: flex;
  a {
    color: ${props => props.theme.brandLight};
    &:visited,
    &:hover {
      color: ${props => props.theme.brandLight};
    }
  }
  svg {
    fill: ${props => props.theme.brandInfo};
    width:50px;
    height:50px;
    ${media.between("medium", "large")`
      width:50px;
      height:50px;
    `};
    position:relative;
    top:4px;
  }
`;

class Footer extends Component {
  render() {
    const isNonSubscriber = this.props.subscriber ? this.props.subscriber.current.anonymous : true;
    return (
      <FooterContainer>
        {isNonSubscriber && (
          <Fragment>
            <FooterAbove>
              <Container>
                <Row justifyContent="center">
                  <Column md={4} textAlign="center">
                    <Icon name="MailRead" />
                    <h4>Get Quick Wins</h4>
                    <div>
                      Are you ready to grow faster?<br /><br />Get personalized actionable content every Thursday designed to lead you into the next level.
                    </div>
                    <br />
                    <Button to={{ type: 'modal', uid: 'newsletter' }} arrow={false}>Heck Yes!</Button>
                  </Column>
                  <Column md={2}>
                  </Column>
                  <Column md={4} textAlign="center">
                    <Icon name="Gift" />
                    <h4>Don't Leave Empty Handed</h4>
                    <div>
                      Want superhuman powers?<br /><br />Download the Top 5 Tools that I use to automate my business. You will get more done in a fraction of the time.
                    </div>
                    <br />
                    <Button to={{ type: 'modal', uid: 'tool-guide' }} arrow={false}>Claim My Free Guide</Button>
                  </Column>
                </Row>
              </Container>
            </FooterAbove>
            <Divider />
          </Fragment>
        )}
        <div>
          <Container>
            <Row>
              <BrandColumn sm={4} justifyContent="center" alignContent="left">
                <LogoLink to="/">
                  <Logo />
                </LogoLink>
                <SocialSection>
                  <SocialLink><Link to="https://twitter.com/ericraio"><Icon name="twitter" /></Link></SocialLink>
                  <SocialLink><Link to="https://www.facebook.com/AutomateYourBrand"><Icon name="facebook" /></Link></SocialLink>
                  <SocialLink><Link to="https://www.instagram.com/ericraio"><Icon name="instagram" /></Link></SocialLink>
                  <SocialLink><Link to="https://www.linkedin.com/in/ericraio"><Icon name="linkedin" /></Link></SocialLink>
                </SocialSection>

                <MobileDivider />
              </BrandColumn>

              <LinkColumn sm={2}>
                <NavTitle>Start Here</NavTitle>
                <FooterLink to="/start">
                  Getting Started
                </FooterLink>
                <FooterLink to="/about">
                  About
                </FooterLink>
              </LinkColumn>

              <LinkColumn sm={3}>
                <NavTitle>Get Involved</NavTitle>
                <FooterLink to="/share">
                  Share Automate Your Brand
                </FooterLink>
                <FooterLink to="/community">
                  Join The Community
                </FooterLink>
              </LinkColumn>

              <LinkColumn sm={3}>
                <NavTitle>Learn</NavTitle>
                <FooterLink to="/resources">
                  Resources
                </FooterLink>
                <FooterLink to="/learn/marketing-measurement">
                  Marketing & Measurement
                </FooterLink>
                <FooterLink to="/learn/brand-identity">
                  Brand & Identity
                </FooterLink>
                <FooterLink to="/learn/business-operations">
                  Business & Operations
                </FooterLink>
              </LinkColumn>
            </Row>
          </Container>
        </div>
        <FooterBelow>
          &copy; Atro Studios LLC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/legal/privacy">Privacy Policy</Link>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;<Link to="/legal/terms">Terms of Service</Link>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;<Link to="/legal/affiliate-disclaimer">Affiliate Disclaimer</Link>
        </FooterBelow>
      </FooterContainer>
    );
  }
}

export default connect()(Footer);

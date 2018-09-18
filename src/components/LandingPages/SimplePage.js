import React, { Component } from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import { styled } from 'components/Theme/Styles';
import Link from 'components/Theme/Link';
import Logo from 'components/Theme/Logo';
import Validator from 'utils/validator';
import FormInput from 'components/Theme/FormInput';
import PrismicHelper from 'utils/prismicHelper';
import Button from 'components/Theme/Button';
import { connect} from 'airlytics';
import { navigate } from "gatsby-link";
import Text from 'components/Theme/Text';

import { Container, FormGroup } from 'styled-bootstrap-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: top center;
  background: ${p => p.color || "linear-gradient(to right, " + p.theme.brandInfo + ", " +  p.theme.brandPrimary + ")"};
  background-size: cover;
  height: 100vh;
`

const LogoContainer = styled.div`
    margin: 0 auto;
    height: 100px;
    max-width: 185px;
    width: 100%;
`;

const FormWrapper = styled(Container)`
  padding: 25px;
  border-radius: 5px;
  border-top: 4px solid ${p => p.theme.brandInfo};
  width: 100%;
  min-height: 200px;
  max-width: 500px;
  background: white;
  &:before {
    content: ' ';
    position: absolute;
    top: -1px;
    background-image: -webkit-gradient(radial, right top, 10, 90% 0%, 150, from(${p => p.theme.brandSuccess}), to(${p => p.theme.brandInfo}));
    background-image: -webkit-radial-gradient(right top, 100% 600px, ${p => p.theme.brandSuccess}, ${p => p.theme.brandInfo});
    background-image: -moz-radial-gradient(right top, farthest-corner, ${p => p.theme.brandSuccess} 0%, ${p => p.theme.brandInfo} 72%);
    width: 100%;
    left: 0;
    z-index: 1;
    height: 5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-size: 10px;
  color: ${p => p.theme.brandLight};
`;


const OptInButton = styled(Button)`
  margin-top: 25px;
`;

const Headline = styled.h1`
  text-align: center;
`;

class SimplePage extends Component {
  state = {
    email: "",
    firstName: "",
    eventTracked: false,
    isEmailValid: false
  }

  firstNameInput = (event) => {
    const value = event.target.value;
    this.setState({
      firstName: value
    })
  }

  emailInput = (event) => {
    const value = event.target.value;
    this.setState({
      isEmailValid: Validator.isEmail(value),
      email: value
    })
  }

  subscribe(e) {
    this.props.actions.newSubscriber(this.state.email, {
      first_name: this.state.firstName
    });
  }

  static getDerivedStateFromProps(props, currentState) {
    let state = currentState || {};
    if (typeof window === "undefined") { return state; }
    if (props.lastAction) {
      if (props.lastAction.type === "NEW_SUBSCRIBER_COMPLETE" && state.type !== "NEW_SUBSCRIBER_COMPLETE") {
        _handleNewSubscriber(props);
      }
      if (props.lastAction.type === "NEW_SUBSCRIBER_FAILURE" && state.type !== "NEW_SUBSCRIBER_FAILURE") {
        // track event
      }
      state.type = props.lastAction.type;
    }
    return state;
  }

  render() {
    const { data } = this.props;
    const { headline, cta_label } = data.primary;

    return (
      <Wrapper>
        <LogoContainer>
          <Logo color="white" />
        </LogoContainer>
        <FormWrapper>
          <Headline><Text body={headline} /></Headline>
          <FormGroup>
            <FormInput type="text" placeholder="First Name" onChange={this.firstNameInput} />
          </FormGroup>
          <FormGroup>
            <FormInput type="email" placeholder="Email" onChange={this.emailInput} isValid={this.state.isEmailValid} />
          </FormGroup>
          <FormGroup>
            <OptInButton arrow={false} disabled={!this.state.isEmailValid || _.isEmpty(this.state.firstName) || _.isEmpty(this.state.email)} onClick={this.subscribe.bind(this)} fullWidth>{cta_label}</OptInButton>
          </FormGroup>
        </FormWrapper>
        <Footer>
          &copy; Atro Studios LLC | <Link to="/legal/privacy" target="_blank">Privacy Policy</Link> | <Link to="/legal/terms" target="_blank">Terms of Service</Link>
        </Footer>
      </Wrapper>
    );
  }
}

function _handleNewSubscriber(props) {
  if (props.data.download && props.data.download.url) {
    const name = PrismicHelper.extractNameFromURL(props.data.download.url);
    props.actions.track("Download", {
      name: name,
      asset: props.data.download.url,
      tags: `Downloaded - ${name}`
    })
  }

  let url;
  if (props.data.redirect_url) {
    url = props.data.redirect_url.url;
    if (url === "" && props.data.redirect_url.document && props.data.redirect_url.document.length) {
      url = PrismicHelper.pathResolver(props.data.redirect_url.document[0]);
    }
  }

  if (_.isEmpty(url)) {
    url = "/thank-you";
    navigate(url);
  } else {
    if (Validator.isExternalSite(url)) {
      window.location.href = url
    } else {
      navigate(url);
    }
  }
}

export default connect()(SimplePage);

export const query = graphql`
  fragment SimplePage on SimplePage {
    __typename
    primary {
      headline {
        text
      }
      cta_label
      redirect_url {
        url
        document {
          ...Link
        }
      }
      download {
        url
      }
    }
  }
`;

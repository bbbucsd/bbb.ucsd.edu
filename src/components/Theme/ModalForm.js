import React, { Fragment, Component } from 'react';
import _ from 'lodash';

import FormInput from './FormInput';
import Validator from 'utils/validator';
import Button from './Button';
import { FormGroup } from 'styled-bootstrap-components';
import { connect} from 'airlytics';
import { styled } from './Styles';
import PrismicHelper from 'utils/prismicHelper';
import { navigate } from "gatsby-link";

const OptInButton = styled(Button)`
  margin-top: 25px;
`;

const CloseMessage = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
  margin-top: 25px;
  color: ${p => p.theme.brandLight};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

class ModalForm extends Component {

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
    this.props.events.close();
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
    const { events, data } = this.props;
    const {
      cta_label,
      close_message
    } = data;

    return (
      <Fragment>
        <FormGroup>
          <FormInput type="text" placeholder="First Name" onChange={this.firstNameInput} />
        </FormGroup>
        <FormGroup>
          <FormInput type="email" placeholder="Email" onChange={this.emailInput} isValid={this.state.isEmailValid} />
        </FormGroup>
        <FormGroup>
          <OptInButton arrow={false} disabled={!this.state.isEmailValid || _.isEmpty(this.state.firstName) || _.isEmpty(this.state.email)} onClick={this.subscribe.bind(this)} fullWidth>{cta_label}</OptInButton>
          <CloseMessage onClick={events.close}>{close_message}</CloseMessage>
        </FormGroup>
      </Fragment>
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
    props.events.notificationSystem.addNotification({
      message: 'Awesome! You\'ll hear from me in email.',
      level: 'success',
      position: 'tc',
    });
  } else {
    if (Validator.isExternalSite(url)) {
      window.location.href = url
    } else {
      navigate(url);
    }
  }
}


export default connect()(ModalForm);

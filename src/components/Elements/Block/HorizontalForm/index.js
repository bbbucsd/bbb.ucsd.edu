import React, { Component } from 'react';
import ThemeButton from 'components/Theme/Button';
import style from './style.module.scss';
import Input from '@material-ui/core/Input';
import Cta from '../Cta';
import { connect } from 'airlytics';
import Validator from 'utils/validator';

class HorizontalForm extends Component {

  state = {
    email: "",
    firstName: "",
    isEmailValid: null
  }

  handleClick = () => {
    this.props.onSubmit && this.props.onSubmit();
    this.props.actions.newSubscriber({
      first_name: this.state.firstName,
      email: this.state.email
    });
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

  render() {
    const { buttonLabel } = this.props;

    return(
      <div className={style.root}>
        <Input
          onChange={this.firstNameInput}
          placeholder="First Name"
          name="first_name"
          required
          inputProps={{
            'aria-label': 'First Name',
          }}
        />
        <Input
          onChange={this.emailInput}
          placeholder="Email"
          required
          error={(this.state.isEmailValid === null) || !this.state.isEmailValid}
          name="email"
          type="email"
          className={style.input}
          inputProps={{
            'aria-label': 'Email',
          }}
        />
        <Cta arrow={false} onClick={this.handleClick} className={style.button}>{buttonLabel}</Cta>
      </div>
    )
  }
}


export default connect()(HorizontalForm);

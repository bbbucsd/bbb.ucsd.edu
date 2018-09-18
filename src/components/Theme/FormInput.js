import React, { Component } from 'react';
import { styled } from 'components/Theme/Styles';
import _ from 'lodash';

const InputContainer = styled.div`
  padding: 30px 0 0 0;
  position: relative;
  &:after, &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.gray};
    bottom: 0;
    left: 0;
    transition: all 0.5s;
  }

  &::after {
    background-color: ${p => p.isCompleted && !p.isValid ? p.theme.brandDanger : p.theme.brandInfo };
    transform: scaleX(0);
  }

  ${p => p.isCompleted && p.isValid && `
    &::after {
      transform: scaleX(0);
    }
  `}

  ${p => p.isCompleted && !p.isValid && `
    &::after {
      background-color: ${p => p.isCompleted && !p.isValid ? p.theme.brandDanger : p.theme.brandInfo };
      transform: scaleX(1);
    }
  `}

  ${p => p.isActive && `
    &::after {
      background-color: ${p => p.isCompleted && !p.isValid ? p.theme.brandDanger : p.theme.brandInfo };
      transform: scaleX(1);
    }
  `}
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  transform: translateY(25px);
  color: ${p => p.theme.gray};
  transition: all 0.5s;
  ${p => p.isCompleted && `
    font-size: 12px;
    transform: translateY(0);
  `}
  ${p => p.isActive && `
    color: ${p => p.theme.brandInfo};
  `}
`;

const Input = styled.input`
  position: relative;
  background: transparent;
  width: 100%;
  border: none;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
`;

class FormInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false,
      isActive: false,
      isValid: false,
    }
  }

  onChange(event) {
    this.setState({
      isValid: _.isBoolean(this.props.isValid) ? this.props.isValid : true,
    });
    this.props.onChange && this.props.onChange(event);
  }

  onBlur(event) {
    this.setState({
      isValid: _.isBoolean(this.props.isValid) ? this.props.isValid : true,
      isCompleted: !!event.target.value,
      isActive: false
    })
  }

  render() {
    const { placeholder, onChange, ...rest } = this.props;
    const id = placeholder.toLowerCase().split(" ").join("-") + "_" + Math.round(Math.random(0, 10) * 100);
    return (
      <InputContainer {...this.state}>
        <Label htmlFor={id} {...this.state}>{placeholder}</Label>
        <Input onBlur={this.onBlur.bind(this)} onChange={this.onChange.bind(this)} onFocus={() => this.setState({ isCompleted: true, isActive: true}) } {...this.state} {...rest} id={id} />
      </InputContainer>
    );
  }

}

export default FormInput;

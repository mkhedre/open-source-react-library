import React, { Component } from 'react';
import Is from '@flk/supportive-is';
import ReactorComponent from '../reactor.component';

export default class FormInput extends ReactorComponent {
  state = {
    validationError: null,
  };
  message = {
    filed: 'this Field is required',
    emailError: 'invalid email address',
  };
  validateInput = (e) => {
    let input = e.target,
      value = input.value;

    let inputValidation = null;

    // check if the input is not empaty
    // this.setState({ email: null }); // reset emaill value
    if (this.props.required === true && Is.empty(value)) {
      inputValidation = this.message.filed;
    }
    if (
      this.props.type === 'email' &&
      inputValidation === null &&
      !Is.email(value) &&
      !Is.empty(value)
    ) {
      inputValidation = this.message.emailError;
    }

    this.set('validationError', inputValidation);
  };
  render() {
    return (
      <div className="form-group">
        <input
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          required={this.props.required}
          onInput={this.validateInput.bind(this)}
        />
        {this.get('validationError') !== null && (
          <label>{this.get('validationError')}</label>
        )}
      </div>
    );
  }
}

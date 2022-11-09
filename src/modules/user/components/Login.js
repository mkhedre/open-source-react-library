import React from 'react';
import './login.scss';
import Is from '@flk/supportive-is';
import { Obj } from 'reinforcements';
import { ReactorPageComponent } from 'core/component';
export default class Login extends ReactorPageComponent {
  state = {
    validation: {
      email: null,
      password: null,
    },
  };
  constructor() {
    super();
    this.setMeta('title', 'Login page').setMeta(
      'description',
      'you can login here'
    );
  }
  login = (e) => {
    e.preventDefault();
    console.log('send to server');
  };

  validateInput = (e) => {
    let input = e.target,
      value = input.value;

    let emailValidation = null;

    // check if the input is not empaty
    // this.setState({ email: null }); // reset emaill value
    if (input.required === true && Is.empty(value)) {
      emailValidation = 'email address is required';
    }
    if (emailValidation === null && !Is.email(value) && !Is.empty(value)) {
      emailValidation = 'invalid email address';
    }

    this.set('validation.email', emailValidation);
  };
  render() {
    return (
      <div id="login">
        <h1>login</h1>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="email address"
              required={true}
              onInput={this.validateInput}
            />
            {this.get('validation.email') !== null && (
              <label>{this.get('validation.email')}</label>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="enter your password"
            />
          </div>
          <div id="button-wrapper">
            <button>login</button>
          </div>
        </form>
      </div>
    );
  }
}

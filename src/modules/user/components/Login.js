import './login.scss';
import React from 'react';
import { ReactorComponent } from 'core/component';
import Form from 'core/component/form/Form';
import FormInput from 'core/component/form/Form-input';
import { title } from 'core/metaData';
export default class Login extends ReactorComponent {
  state = {
    validation: {
      email: null,
      password: null,
    },
  };
  constructor() {
    title('Login page');
  }

  render() {
    return (
      <div id="login">
        <h1>login</h1>
        <Form>
          <FormInput
            type="email"
            className="form-input"
            placeholder="email address"
            required={true}
          />
          <FormInput
            type="password"
            className="form-input"
            placeholder="enter your password"
            required
          />
          <div id="button-wrapper">
            <button>login</button>
          </div>
        </Form>
      </div>
    );
  }
}

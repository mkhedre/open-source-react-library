import './login.scss';
import React from 'react';
import { ReactorComponent } from 'reactor/component';
import Form from 'reactor/component/form/Form';
import FormInput from 'reactor/component/form/Form-input';
import { description, title } from 'reactor/metaData';
import login from '../services/Auth';
import config from 'reactor/config';
import user from 'user';
import Cache from 'reactor/Cache';
import { navigateTo } from 'reactor/helpers';
import { Navigate } from 'react-router-dom';
export default class Login extends ReactorComponent {
  constructor(props) {
    super(props);
    title('Login page');
    description('login here');
    Cache.set('user', {
      name: 'mostafa',
      age: 34,
    });
    if (user.isLoggedIn()) {
      <Navigate to="/users" />;
    }
  }
  login = async (e) => {
    // login(e.target)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    try {
      let { data } = await login(e.target);
      user.login(data);
    } catch (error) {
      console.log(error);
    }
  };
  displayError() {
    this.errors = this.get('errors');
    return Object.keys(this.errors).map((key) => {
      return <div key={key}>{this.errors[key]}</div>;
    });
  }
  render() {
    return (
      <div id="login">
        <h1>login</h1>
        <Form onSubmit={this.login}>
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

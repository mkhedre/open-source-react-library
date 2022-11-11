import React, { Component } from 'react';

export default class Form extends Component {
  submit(e) {
    e.preventDefault();
    if (this.props.onSubmit) {
      let formElement = e.target;
      this.props.onSubmit(e, formElement);
    }
    console.log(e);
  }
  render() {
    return (
      <form noValidate onSubmit={this.submit.bind(this)}>
        {this.props.children}
      </form>
    );
  }
}

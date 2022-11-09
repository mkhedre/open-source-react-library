import React, { Component } from 'react';

export default class Form extends Component {
  submit(e) {
    e.preventDefault();
    let formElement = e.target;
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

import React, { Component } from 'react';
import { Obj } from 'reinforcements';

export default class ReactorComponent extends Component {
  constructor(key, value) {
    super();
  }
  set(key, value) {
    this.setState(Obj.set(this.state, key, value));
  }

  get(key, $default = null) {
    return Obj.get(this.state, key, $default);
  }
  render() {
    return {};
  }
}

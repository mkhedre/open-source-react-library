import React from 'react';
import Layout from 'layout';
import { ReactorComponent } from 'reactor/component';

export default class Users extends ReactorComponent {
  state = {
    name: 'mostafa',
  };
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({ name: 'ali' });
    }, 2000);
  }

  render() {
    return (
      <>
        <Layout>hello</Layout>
      </>
    );
  }
}

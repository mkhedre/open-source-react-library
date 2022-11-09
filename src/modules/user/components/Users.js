import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from 'core/config';

export default class Users extends Component {
  state = {
    name: 'mostafa',
  };
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({ name: 'ali' });
    }, 2000);
  }
  componentDidMount() {
    //console.log(document.getElementById('user'));
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('user').innerHTML = 'prev name ' + prevState.name;
    return null;
  }
  componentDidUpdate() {
    console.log('updated');
  }
  render() {
    return (
      <>
        <Link to="/">back to {config.get('age')}</Link>
        <div id="user"></div>
      </>
    );
  }
}

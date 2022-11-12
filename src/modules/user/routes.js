import Login from './components/Login';
import router from 'reactor/router';
import Users from './components/Users';
import user from 'reactor/user';
import React from 'react';
import { Navigate } from 'react-router-dom';

function isLoggedIn(route) {
  if (!user.isLoggedIn()) {
    return <Navigate to="/login" />;
  }
}
function logged() {
  if (user.isLoggedIn()) {
    return <Navigate to="/users" />;
  }
}
router.add('/login', Login);
router.add('/users', Users);

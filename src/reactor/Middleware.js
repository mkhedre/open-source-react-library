import React from 'react';
import { navigateTo } from './helpers';
import user from './user';
import { Navigate } from 'react-router-dom';
import Cache from './Cache';
import Login from '../modules/user/components/Login';
import Is from '@flk/supportive-is';

const Middleware = (props) => {
  //   Cache.set('user', {
  //     name: 'mostafa',
  //     age: 34,
  //   });
  const { route } = props;
  console.log(route);
  let middlewareList = route.middleware;
  if (!Is.array(middlewareList)) {
    middlewareList = [middlewareList];

    for (let middleware of middlewareList) {
      //   let output = middleware(route);
      //   console.log(output);
      if (middleware) {
        return middleware(route);
      }
    }
  }
  return <route.component />;
  //   return <div>{React.createElement(route.comonent)}</div>;
  //   return !user.isLoggedIn() ? <Login /> : <div>Middleware</div>;
};

export default Middleware;

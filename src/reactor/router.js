import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Middleware from './Middleware';
import { createHistory } from 'history';

let history = createHistory();

const routesList = [];
console.log(routesList);
function addRouter(path, component, middleware) {
  routesList.push({
    path,
    component,
    middleware,
  });
}

function Rout() {
  const routes = routesList.map((route, index) => {
    return (
      <Route
        path={route.path}
        exact={true}
        key={index}
        element={<Middleware route={route} />}
      ></Route>
    );
  });
  return <Routes>{routes}</Routes>;
}

export function scan() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Router>
        <Rout />
      </Router>
    </React.StrictMode>
  );
  //   ReactDOM.render(<Rout />, document.getElementById('root'));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  add: addRouter,
};

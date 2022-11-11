import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const routesList = [];

function addRouter(path, component) {
  routesList.push({
    path,
    component,
  });
}

function Rout() {
  const routes = routesList.map((route, index) => {
    return (
      <Route
        path={route.path}
        exact={true}
        key={index}
        element={route.component}
      />
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

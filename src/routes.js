import React from 'react';
import { Route, IndexRouter } from 'react-router';
import App from './components/App';
import Login from './components/login';

export default(
  <Route path="/" component={App} >
    <Route path="/users" component={Login} />
  </Route>
)

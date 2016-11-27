import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import UsersList from './containers/users_list';

export default(
  <Route path="/" component={App} >
    <IndexRoute component={UsersList} />

  </Route>
)

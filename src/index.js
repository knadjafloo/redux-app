import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import 'whatwg-fetch';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware()(createStore);
//make initial call to load the users and dispatch the action
//loadUsers().then(dispatch(show_users_action_Creator));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

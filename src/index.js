import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import 'whatwg-fetch';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
/**
*stop the action before it sent to the reducer so a promise is resolved before it's sent to its reducer (so reducer always has real data)
*/
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

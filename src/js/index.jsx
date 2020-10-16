import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers/rootReducer';

import App from './app';

/* eslint-disable no-underscore-dangle */

// Configure Redux Dev Tools in a way that works with Redux Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a Redux store and add Promise Middleware to Redux
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware)));
/* eslint-enable */


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*jslint browser: true*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import App from 'containers/App'

import configureStore from 'store/configureStore';

const history = createBrowserHistory({ queryKey: false });
const routerMiddlewareInstance = routerMiddleware(history);
const store = configureStore({}, routerMiddlewareInstance);

ReactDOM.render(
  <App store={ store } history={ history } />,
  document.getElementById('root')
);

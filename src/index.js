import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
require('./favicon.ico'); // Tell webpack to load favicon.ico

import configureStore from './store/configureStore';

import routes from './routes.js';

import "./styles/App.scss";

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('portfolio')
)

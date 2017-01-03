import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
require('./favicon.ico'); // Tell webpack to load favicon.ico

import configureStore from './store/configureStore';

import routes from './routes.js';

import "./styles/App.scss";

const store = configureStore();

const interval = setInterval(function() {
  if(document.readyState === 'complete') {

    document.getElementById("loading").className += " zero-opacity";
    document.getElementById("portfolio").style.opacity = 1;

    const timeout =  setTimeout(function () {
      const element = document.getElementById("loading");
      element.parentNode.removeChild(element);
      clearTimeout(timeout);
    }, 1000);

    clearInterval(interval);
  }
}, 20);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('portfolio')
)

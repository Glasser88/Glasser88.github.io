import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import Wrapper from './components/Wrapper';
import Splashpage from './components/Splashpage';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

export default (
  <Route path='/' component={Wrapper}>
    <IndexRoute component={Splashpage} />

    <Route path="portfolio" component={Portfolio} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
);

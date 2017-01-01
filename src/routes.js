import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import Wrapper from './components/Wrapper';
import Splashpage from './components/pages/splashpage/Splashpage';
import Portfolio from './components/pages/portfolio/Portfolio';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';

export default (
  <Route path='/Glasser88.github.io' component={Wrapper}>
    <IndexRoute component={Splashpage} />

    <Route path="/Glasser88.github.io/portfolio" component={Portfolio} />
    <Route path="/Glasser88.github.io/about" component={About} />
    <Route path="/Glasser88.github.io/contact" component={Contact} />
  </Route>
);

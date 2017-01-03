import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import Portfolio from '../portfolio/Portfolio';

import STYLES from './Splashpage.scss';

class Splashpage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={STYLES.Splashpage}>
        <div className={STYLES.text}>
          <h1>Trevor Glass</h1>
          <h2>Software Engineer, Entrepreneur, Author & former Professional Hockey Player.</h2>
          <h3>' You miss 100% of the &nbsp;&nbsp;&nbsp;&nbsp;shots you never take '</h3>
          <h4>&mdash; Wayne Gretzky &mdash;</h4>
        </div>
      </div>
    )
  }
}

export default Splashpage;

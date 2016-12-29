import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

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
          <h2>Front End Developer, Entrepreneur, Author & former Professional Hockey Player.</h2>
        </div>
      </div>
    )
  }
}

export default Splashpage;

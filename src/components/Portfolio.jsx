import React, { Component } from 'react';

import { Link } from 'react-router';

import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';

import STYLES from './Portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className={STYLES.Portfolio}>
        <div className={STYLES.inside}>
          <div className={STYLES.featureOne}>
            <h3>Minesweeper</h3>
            <div className={STYLES.insideBorder}>
              <div className={STYLES.description}>
                <div className={STYLES.desTitle}>DESCRIPTION</div>
                <div className={STYLES.desBlock}>
                  I decided to put a modern twist on a classic game and reconstruct Minesweeper with React and Redux.
                </div>
                <div className={STYLES.techTitle}>TECHNOLOGIES</div>
                <div className={STYLES.techBlock}>
                  React, Redux, Webpack, Immutable, ES6, Babel, React-Bootstrap, Sass
                </div>
              </div>
              <div className={STYLES.screenshot}>
                <div className={STYLES.appImage}></div>
              </div>
              <Button className={STYLES.viewProject}>View Project</Button>
            </div>
          </div>



        </div>
      </div>
    );
  }
}

export default Portfolio;

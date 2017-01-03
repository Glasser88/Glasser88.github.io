import React from 'react';

import STYLES from './About.scss';

const About = () => (
  <div className={STYLES.About}>
    <div className={STYLES.inside}>
      <div className={STYLES.hockey}></div>
      <div>
        <h2>The Story Of</h2>
        <h3>Trevor Glass</h3>
        <div className={STYLES.story}>
          <p className={STYLES.one}>From hockey player to</p>
          <p className={STYLES.two}>
            Software Engineer my values have &nbsp;&nbsp;&nbsp; remained the same.
          </p>
          <p className={STYLES.three}>Always use</p>
          <p className={STYLES.four}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; my creativity and hard work to create opportunities. Dream of the impossible. And
          </p>
          <p className={STYLES.five}>
            always believe that anything is possible.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;

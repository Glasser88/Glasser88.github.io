import React from 'react';

import STYLES from './About.scss';

// let my hard work & creativity be the driving force.

const About = () => (
  <div className={STYLES.About}>
    <div className={STYLES.inside}>
      <div className={STYLES.hockey}></div>
      <div>
        <h2 className={STYLES.title}>The Story Of </h2>
        <h3 className={STYLES.name}>Trevor Glass</h3>
        <div className={STYLES.story}>
          <p className={STYLES.start}>From hockey player to</p>
          <p className={STYLES.intro}>
            Software Engineer my values have &nbsp;&nbsp;&nbsp; remained the same.
          </p>
          <p className={STYLES.always}>Always use</p>
          <p className={STYLES.pointOne}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; my creativity and hard work to create opportunities. Dream of the impossible. And always
          </p>
          <p className={STYLES.finish}>
            believe that anything is possible.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;

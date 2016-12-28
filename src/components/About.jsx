import React from 'react';

import STYLES from './About.scss'

const About = () => (
  <div className={STYLES.About}>
    <div className={STYLES.inside}>
      <div className={STYLES.hockey}></div>
      <div>
        <div className={STYLES.title}>The Story Of </div>
        <div className={STYLES.name}>Trevor Glass</div>
        <div className={STYLES.intro}>
          From hockey player to Software Engineer my goals have remained the same.
        </div>
        <div className={STYLES.pointOne}>
          Let my <span className={STYLES.highlight}>hard work</span> & <span className={STYLES.highlight}>creativity</span> be the driving force
        </div>
        <div className={STYLES.pointTwo}>
          <span className={STYLES.highlight}>Dream</span> of the impossible.
        </div>
      </div>
    </div>
  </div>
);

export default About;

import React from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './DividerOne.scss';

const DividerOne = () => (
  <div className={STYLES.DividerOne}>
    <div className={STYLES.boxHolder}>
      <div className={STYLES.box}>
        <div className={STYLES.circle}>
          <Glyphicon className={STYLES.icon} glyph="globe" />
        </div>
        <h3>Development</h3>
        <p>
          With creative thinking as my backbone, I have always enjoyed coming
          up with new ways to solve complex problems and create real world
          applications out of a few lines of code.
        </p>
      </div>
      <div className={STYLES.box}>
        <div className={STYLES.circle}>
          <Glyphicon className={STYLES.icon} glyph="eye-open" />
        </div>
        <h3>Design</h3>
        <p>
          With an eye for design, I always make sure that every project I take
          on creates a stunning visual impression by combining amazing graphics
          with pixel perfect designs.
        </p>
      </div>
      <div className={STYLES.box}>
        <div className={STYLES.circle}>
          <Glyphicon className={STYLES.icon} glyph="education" />
        </div>
        <h3>Education</h3>
        <p>
          I am always pushing myself to expand my knowledge in all aspects of
          software development. Learning new technologies has become a favorite
          for satisfying my ever growing curiosity.
        </p>
      </div>
    </div>
  </div>
);

export default DividerOne;

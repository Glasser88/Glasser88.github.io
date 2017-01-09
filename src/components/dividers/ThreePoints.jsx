import React from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import STYLES from './ThreePoints.scss';

const ThreePoints = () => (
  <div className={STYLES.ThreePoints}>
    <div className={STYLES.boxHolder}>
      <div className={STYLES.box}>
        <div className={STYLES.hexagonWrapper}>
          <div className={STYLES.hexagon}>
            <div className={STYLES.iconWrapper}>
              <Glyphicon className={STYLES.icon} glyph="globe" />
            </div>
          </div>
        </div>
        <h3>Development</h3>
        <hr className={STYLES.line} />
        <p>
          With creative thinking as my backbone, I have always enjoyed coming
          up with new ways to solve complex problems and create real world
          applications out of a few lines of code.
        </p>
      </div>
      <div className={STYLES.box}>
        <div className={STYLES.hexagonWrapper}>
          <div className={STYLES.hexagon}>
            <div className={STYLES.iconWrapper}>
              <Glyphicon className={STYLES.icon} glyph="eye-open" />
            </div>
          </div>
        </div>
        <h3>Design</h3>
          <hr className={STYLES.line} />
        <p>
          With an eye for design, I always make sure that every project I take
          on creates a stunning visual impression by combining amazing graphics
          with pixel perfect designs.
        </p>
      </div>
      <div className={STYLES.box}>
        <div className={STYLES.hexagonWrapper}>
          <div className={STYLES.hexagon}>
            <div className={STYLES.iconWrapper}>
              <Glyphicon className={STYLES.icon} glyph="education" />
            </div>
          </div>
        </div>
        <h3>Education</h3>
          <hr className={STYLES.line} />
        <p>
          I am always pushing myself to expand my knowledge in all aspects of
          software development. Learning new technologies has become a favorite
          for satisfying my ever growing curiosity.
        </p>
      </div>
    </div>
  </div>
);

export default ThreePoints;

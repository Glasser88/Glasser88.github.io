import React from 'react';

const LineChart = require("react-chartjs").Line;

import { SKILLS_DATA } from '../../constants/skills-data';

import STYLES from './DividerThree.scss';

const DividerThree = () => (
  <div className={STYLES.DividerThree}>
    <div className={STYLES.chartHolder}>
      <div className={STYLES.chart}>
        <LineChart
          data={SKILLS_DATA}
          height="300"
          width="370"
        />
      </div>
      <div className={STYLES.description}>
        <div className={STYLES.headings}>
          <h2>An Overview of My</h2>
          <h3>Ever Evolving Skillset</h3>
          <hr className={STYLES.line} />
          <div className={STYLES.legend}>
            <div className={STYLES.hockeySkills}>
              <div className={STYLES.hockeyColor}></div>
              <h4>Hockey Skills</h4>
            </div>
            <div className={STYLES.codingSkills}>
              <div className={STYLES.codingColor}></div>
                <h4>Coding Skills</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DividerThree;

import React from 'react';

import { INTERESTS_DATA } from '../../constants/interests-data';

const RadarChart = require("react-chartjs").Radar;

import STYLES from './DividerTwo.scss';

const DividerTwo = () => (
  <div className={STYLES.DividerTwo}>
    <div className={STYLES.chartHolder}>
      <div className={STYLES.description}>
        <h2>Some of My Interests</h2>
        <h3>On any given day</h3>
        <hr className={STYLES.line} />
        <div className={STYLES.legend}>
          <div className={STYLES.withCoffee}>
            <div className={STYLES.coffeeColor}></div>
            <h4>With Coffee</h4>
          </div>
          <div className={STYLES.withoutCoffee}>
            <div className={STYLES.noCoffeeColor}></div>
            <h4>Without Coffee</h4>
          </div>
        </div>
      </div>
      <div>
        <RadarChart
          className={STYLES.radar}
          data={INTERESTS_DATA} width="300" height="400"
        />
      </div>
    </div>
  </div>
);

export default DividerTwo;

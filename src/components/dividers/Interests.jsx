import React from 'react';

import { INTERESTS_DATA } from '../../constants/interests-data';

const RadarChart = require("react-chartjs").Radar;

import STYLES from './Interests.scss';

const INTERESTS_OPTIONS = {
  responsive: true,
}

const Interests = () => (
  <div className={STYLES.Interests}>
    <div className={STYLES.insideWrapper}>
      <div className={STYLES.description}>
        <div>
          <h2>On Any Given Day</h2>
          <h3>Some of My Interests</h3>
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
      </div>
      <div className={STYLES.graph}>
        <div>
          <RadarChart
            className={STYLES.radar}
            data={INTERESTS_DATA}
            options={INTERESTS_OPTIONS}

          />
        </div>
      </div>
    </div>
  </div>
);

export default Interests;

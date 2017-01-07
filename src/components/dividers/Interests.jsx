import React from 'react';

import { INTERESTS_DATA } from '../../constants/interests-data';

const RadarChart = require("react-chartjs").Radar;

import STYLES from './Interests.scss';

const INTERESTS_OPTIONS = {
  scaleShowLine: true,
  scaleLineColor: '#272727',
  angleLineColor: '#272727',
  scaleLineWidth: 1.4,
  pointLabelFontFamily: 'Open Sans',
  pointLabelFontStyle: 'lighter',
  pointLabelFontColor: '#fff',
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
              <h4>WITH COFFEE</h4>
            </div>
            <div className={STYLES.withoutCoffee}>
              <div className={STYLES.noCoffeeColor}></div>
              <h4>WITHOUT COFFEE</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={STYLES.graph}>
        <div>
          <RadarChart
            id="myChart"
            className={STYLES.radar}
            data={INTERESTS_DATA}
            options={INTERESTS_OPTIONS}
            height="300"
            width="370"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Interests;

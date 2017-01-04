import React from 'react';

const DoughnutChart = require("react-chartjs").Doughnut;

const otherData = [
  {
      value: 50,
      color:"#146474",
      highlight: "#118295",
      label: "Fishing"
  },
  {
      value: 20,
      color: "#011829",
      highlight: "#002742",
      label: "Golfing"
  },
  {
      value: 20,
      color: "#0e4f64",
      highlight: "#07687f",
      label: "Camping"
  },
  {
      value: 10,
      color: "#c0a062",
      highlight: "#d7b97d",
      label: "Gaming"
  }
];



import STYLES from './DividerThree.scss';

const DividerThree = () => (
  <div className={STYLES.DividerThree}>
    <div className={STYLES.chartHolder}>
      <div>
        <DoughnutChart
          data={otherData} width="300" height="300"
        />
      </div>
      <div className={STYLES.description}>
        <h2>Something Here</h2>
        <h3>Some more stuff here</h3>
      </div>
    </div>
  </div>
);

export default DividerThree;

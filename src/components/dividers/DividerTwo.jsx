import React from 'react';

const DoughnutChart = require("react-chartjs").Doughnut;

const RadarChart = require("react-chartjs").Radar;

function rand(min, max, num) {
  var rtn = [];
  while (rtn.length < num) {
    rtn.push(Math.floor((Math.random() * (max - min)) + min));
  }
  return rtn;
}

const interestsData = [
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

const radarData = {
            labels: ["Fishing", "Golfing", "Camping", "Sports", "Coding", "Gaming", "Running"],
            datasets: [
                {
                    label: "With Coffee",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: rand(32, 100, 7)
                },
                {
                    label: "Without Coffee",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: rand(32, 80, 7)
                }
            ]
          };


import STYLES from './DividerTwo.scss';

// <DoughnutChart
//   data={interestsData} width="200" height="200"
// />

const DividerTwo = () => (
  <div className={STYLES.DividerTwo}>
    <div className={STYLES.chartHolder}>
      <div className={STYLES.description}>
        <h2>Some of My Interests</h2>
        <h3>On any given day</h3>
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
      <div className={STYLES.radar}>
        <RadarChart
          className={STYLES.radar}
          data={radarData} width="400" height="400"
        />
      </div>
    </div>
  </div>
);

export default DividerTwo;

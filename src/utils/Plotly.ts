import Plotly from "plotly.js";

const msRange = 1000000;
export const setupPlotly = csvData => {
  const chartData = parse(csvData);
  console.log(chartData);
  Plotly.newPlot("plotlyChart", chartData);
};

const msRange = 1000000;

const parseTime = ms => Math.round(((ms / msRange) % 1) * msRange);
const parseDate = ms => new Date(ms);

export const parseCsv = (csvData: string, keys: string[]) => {
  //console.log(csvData);
  let lines = csvData.split("\n").map(line => line.split(","));
  keys = keys ? keys : lines.splice(0, 1)[0];
  console.log(keys);
  const vals = keys.map(k => []);
  lines.forEach(l => {
    l.map(strVal => parseFloat(strVal)).forEach((elt, i) => vals[i].push(elt));
  });
  const abscissa = vals.splice(0, 1)[0].map(s => parseDate(s * 1000));
  const series = vals.map(ordinates => ({ x: abscissa, y: ordinates }));
  //console.log(series);
  return series;
};

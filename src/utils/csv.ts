const msRange = 1000000;

const parseTime = (ms: number) => Math.round(((ms / msRange) % 1) * msRange);
const parseDate = (ms: string | number | Date) => new Date(ms);

export const parseCsv = (csvData: string, keys=[]) => {
  //console.log(csvData);
  let lines: any = csvData.split("\n").map(line => line.split(","));
  keys = keys.length ? keys : lines.splice(0, 1)[0];
  console.log(keys);
  const vals: any = keys.map(k => []);
  lines.forEach((l: any[]) => {
    l.map((strVal: string) => parseFloat(strVal)).forEach((elt: any, i: number) => vals[i].push(elt));
  });
  const abscissa = vals.splice(0, 1)[0].map((s: number) => parseDate(s * 1000));
  const series = vals.map((ordinates: any) => ({ x: abscissa, y: ordinates }));
  //console.log(series);
  return series;
};

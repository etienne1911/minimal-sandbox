import { useState, useEffect, useRef } from "react";
import React from "react";
import csvSample from "./resources/dataset.json";
import { fetchRemoteUrl } from "./common/misc";
import Plot from "react-plotly.js";
import { parseCsv } from "./utils/csv";
import androidScriptTest from "./utils/ScriptTest.js";

export default ({ args }: any) => {
  const [data, setData] = useState();

  // process args
  const { remoteUrl, fields } = args;
  const fieldsStr: string = fields ? fields : "";
  const fieldsArr: string[] = fieldsStr.split(",");

  useEffect(() => {
    console.log(fieldsArr);

    (async () => {
      const remoteFile: any = await fetchRemoteUrl(args.remoteUrl);
      setData(remoteFile);
      console.log(remoteFile);
      androidScriptTest();
      //const data = await parseCsv(remoteUrl);
      //setData(data);
    })();
  }, [remoteUrl]);

  return (
    <>
      <Grapher rawData={data} />
    </>
  ); //;
};

const Grapher = ({ rawData }: any) => {
  //const chartRef: any = useRef();
  console.log(rawData);
  const chartData = rawData ? parseCsv(rawData) : [];
  console.log(chartData);
  return (
    <>
      {/* <svg className="line-chart line-chart--multiple" ref={chartRef} /> */}
      <Plot
        data={chartData}
        layout={{ width: 1024, height: 768, title: "power stats" }}
      />
    </>
  );
};

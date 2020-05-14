import { useState, useEffect } from "react";
import { fetchRemoteUrl } from "./common/misc";
import React from "react";

export default ({ args }: any) => {
  const [data, setData] = useState("placeholder");

  useEffect(() => {
    (async () => {
      const remoteFileData: any = await fetchRemoteUrl(args.remoteUrl);
      setData(remoteFileData);
    })();
  });

  return <CsvGrapher data={data} />;
};

const CsvGrapher = ({ data }: any) => {
  console.log(data);
  return <>{data}</>;
};

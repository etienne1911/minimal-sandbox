import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

/**
 * route to sample path and support sampleId
 */
export default () => {
  return (
    <>
      <Router basename="/">
        {/* <Route path="/" component={App} /> */}
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          {/* <LoadSample sample={sample} /> */}
          {/* <Route exact path="/:sample" component={LoadSample} />
          <Route path="/:sample/:caseId" component={LoadSample} /> */}
        </Switch>
      </Router>
    </>
  );
};

/**
 * Load a specific sample
 * @param param0
 */
export const Start = ({ match }: any) => {
  const [data, setData] = useState("placeholder");

  // const setSample = useSampleStates(state => state.setSample);
  // let name = match.params.sample;
  let query = useQuery();
  // let { caseId } = useParams();
  // preload argument list from sample declaration
  const urlArgs: any = { remoteUrl: "" };
  // + fill from url provided params
  Object.keys(urlArgs).forEach((argName: string) => {
    const urlArgVal = query.get(argName);
    if (urlArgVal !== undefined && urlArgVal !== "")
      urlArgs[argName] = urlArgVal;
  });
  useEffect(() => {
    (async () => {
      const remoteFileData: any = await fetchRemoteUrl(urlArgs.remoteUrl);
      setData(remoteFileData);
    })();
  });

  // sample.type = item.tags[0];
  return <>{data}</>;
};

export const fetchRemoteUrl = async (url: string) => {
  console.log("fetching " + url);
  const opt: RequestInit = { mode: "cors" };
  try {
    let response = await fetch(url, opt);
    let txt = await response.text();
    return txt;
  } catch (e) {
    console.log(e);
  }
};

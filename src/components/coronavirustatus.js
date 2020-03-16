import { useState, useContext, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { CircularProgress  } from "@material-ui/core";

import { BaseUrlContext } from "./baseurlcontext";
const arabicStatusNames = {
    confirmed: "المصابين",
    deaths: "الوفيات",
    recovered: "المشافين"
}
export default ({ status, background }) => {
  const [iraqData, setIraqData] = useState(null);
  const baseUrl = useContext(BaseUrlContext);
  useEffect(() => {
    let fetchStatus = true;
    if (fetchStatus) {
      fetch(`${baseUrl}${status.toLowerCase()}`).then(data => {
        data.json().then(jsondata => {
          const getIraq = jsondata.locations.filter(
            item => item.country === "Iraq"
          );
          setIraqData(getIraq);
        });
      });
    }
    return () => {
      fetchStatus === false;
    };
  }, []);
  return <div>{iraqData ? <h1>{arabicStatusNames[status]}: {iraqData[0].latest}</h1> : <h1><CircularProgress /></h1>}</div>;
};

import { useState, useEffect, useContext } from "react";
import fetch from 'isomorphic-unfetch'
import { BaseUrlContext } from "./components/baseurlcontext";

const useCorona = () => {
  const [iraqData, setIraqData] = useState(null);
  const baseUrl = useContext(BaseUrlContext);
  useEffect(() => {
    let fetchStatus = true;
    if (fetchStatus) {
      fetch(`${baseUrl}`).then(data => {
        data.json().then(jsondata => {
          const getIraq = jsondata.locations.filter(
            item => item.country === "Iraq"
          );
          setIraqData(getIraq[0].latest);
        });
      });
    }
    return () => {
      fetchStatus === false;
    };
  }, []);
  return iraqData
};

export {
    useCorona
}

import { CircularProgress } from "@material-ui/core";

import { useCorona } from "../hooks";
const arabicStatusNames = {
  confirmed: "المصابين",
  deaths: "الوفيات",
  recovered: "المشافين"
};
export default ({status}) => {
  const iraqData = useCorona();
  return (
    <div>
      {iraqData ? (
        <h1 className="result">
          {arabicStatusNames[status]}: {iraqData[status]}
        </h1>
      ) : (
        <h1>
          <CircularProgress />
        </h1>
      )}
    </div>
  );
};

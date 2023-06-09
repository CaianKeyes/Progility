import { useState } from "react";
import Navbar from "../navbar";
import BarChart from "./barChart";
import StatsHeader from "./statsHeader";

function Stats ({users}) {
  const [data, setData] = useState([10, 8, 5, 11]);

  const handleDataFromChild = (childData) => {
    console.log(childData);
    switch (childData) {
      case(1):
        break;
      case(2):
        break;
      case(3):
        break;
      case(4):
        break;
    }
  }

  return <>
    <Navbar />
    <StatsHeader users={users} onData={handleDataFromChild} />
    <BarChart data={data} />
  </>
}

export default Stats;
import Navbar from "../navbar";
import StatsHeader from "./statsHeader";

function Stats ({users}) {

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
  </>
}

export default Stats;
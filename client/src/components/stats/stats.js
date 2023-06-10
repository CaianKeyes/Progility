import { useEffect, useState } from "react";
import { getCompletedTasks } from "../../apiService";
import Navbar from "../navbar";
import BarChart from "./barChart";
import StatsHeader from "./statsHeader";
import { formatData, filterByDates } from '../../statsFunction'
import UserStats from "./userStats";

function Stats ({users, workspace}) {
  const [selector, setSelector] = useState('1a');
  const [completedTasks, setCompletedTasks] = useState([]);
  const [chart, setChart] = useState([]);

  useEffect(() => {
    if(workspace.id) {
      getCompletedTasks(workspace.completedTasksId).then(res => {
        setCompletedTasks(res);
      })
    }
  }, [workspace])

  useEffect(() => {
    switch (selector) {
      case('1a'):
        const resultTask = [];
        const resultHour = [];
        for(const user of users) {
          resultTask.push(user.tasksCompleted);
          resultHour.push(user.hoursCompleted);
        }
        setChart(<>
          <BarChart data={resultTask} users={users} />
          <BarChart data={resultHour} users={users} />
        </>)
        break;

      case('2a'):
        const res = formatData(filterByDates(completedTasks, 30),users);
        setChart(<>
          <BarChart data={res[0]} users={users} />
          <BarChart data={res[1]} users={users} />
        </>)
        break;

      case('3a'):
        const res2 = formatData(filterByDates(completedTasks, 7),users);
        setChart(<>
          <BarChart data={res2[0]} users={users} />
          <BarChart data={res2[1]} users={users} />
        </>)
        break;

      case('4a'):
      setChart(<>
        <UserStats users={users}/>
      </>)
        break;
      default:
        console.log('selector does not exsist');
    }
  }, [users, selector, completedTasks])

  const handleDataFromChild = (childData) => {
    setSelector(childData);
  }

  return <>
    <Navbar />
    <StatsHeader users={users} onData={handleDataFromChild} />
    {chart}
  </>
}

export default Stats;
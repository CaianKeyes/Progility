import { useEffect, useState } from "react";
import { getCompletedTasks } from "../../apiService";
import Navbar from "../navbar";
import BarChart from "./barChart";
import StatsHeader from "./statsHeader";
import { formatData, filterByDates } from '../../statsFunction'

function Stats ({users, workspace}) {
  const [selector, setSelector] = useState(1);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [hourData, setHourData] = useState([]);

  useEffect(() => {
    if(workspace.id) {
      getCompletedTasks(workspace.completedTasksId).then(res => {
        setCompletedTasks(res);
      })
    }
  }, [workspace])

  useEffect(() => {
    console.log('selc', selector);
    switch (selector) {
      case('1'):
        assignData(users);
        break;
      case('2'):
      console.log(2);
        const res = formatData(filterByDates(completedTasks, 30),users);
        setTaskData(res[0]);
        setHourData(res[1]);
        break;
      case('3'):
      console.log(3);
        const res2 = formatData(filterByDates(completedTasks, 7),users);
        setTaskData(res2[0]);
        setHourData(res2[1]);
        break;
      case('4'):
        break;
    }
  }, [users, selector])

  const assignData = (userList) => {
    setTaskData(() => {
      const result = [];
      for(const user of userList) {
        result.push(user.tasksCompleted);
      }
      return result;
    })
    setHourData(() => {
      const result = [];
      for(const user of userList) {
        result.push(user.hoursCompleted);
      }
      return result;
    })
  }

  const handleDataFromChild = (childData) => {
    setSelector(childData);
  }

  return <>
    <Navbar />
    <StatsHeader users={users} onData={handleDataFromChild} />
    <BarChart data={taskData} users={users} />
    <BarChart data={hourData} users={users} />
  </>
}

export default Stats;
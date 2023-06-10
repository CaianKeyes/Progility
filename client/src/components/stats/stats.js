import { useEffect, useState } from "react";
import { getCompletedTasks } from "../../apiService";
import Navbar from "../navbar";
import BarChart from "./barChart";
import StatsHeader from "./statsHeader";

function Stats ({users, workspace}) {
  const [selector, setSelector] = useState(1);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [hourData, setHourData] = useState([]);

  useEffect(() => {
    if(workspace.id) {
      getCompletedTasks(workspace.completedTasksId).then(res => {
        console.log(res);
        setCompletedTasks(res);
      })
    }
  }, [workspace])

  useEffect(() => {
    switch (selector) {
      case(1):
      assignData(users);
        break;
      case(2):
        break;
      case(3):
        break;
      case(4):
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

  const filterLastWeek = (arr) => {
    const result = [];
    for(const obj of arr) {
      if(dateChecker(obj.timestamp, 7)) {
        result.push(obj);
      }
    }
  }

  const dateChecker = (date, numDays) => {
    const currentDate = new Date();
    const daysAgo = new Date().setDate(currentDate.getDate() - numDays);

    console.log(date);
    console.log(currentDate);
    console.log(daysAgo);
    console.log(date >= daysAgo);

    return date >= daysAgo;
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
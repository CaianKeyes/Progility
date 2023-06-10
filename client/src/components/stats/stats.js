import { useEffect, useState } from "react";
import { getCompletedTasks } from "../../apiService";
import Navbar from "../navbar";
import BarChart from "./barChart";
import StatsHeader from "./statsHeader";

function Stats ({users, workspace}) {
  const [selector, setSelector] = useState(2);
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
    switch (selector) {
      case(1):
        assignData(users);
        break;
      case(2):
        const res = formatData(filterLastWeek(completedTasks),users);
        setTaskData(res[0]);
        setHourData(res[1]);
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

  const formatData = (tasks, users) => {
    const taskCount = countTasks(tasks);
    const hourCount = countHours(tasks);
    const tasksArr = [];
    const hoursArr = [];

    for(const user of users) {
      if(!taskCount[user.id]) {
        tasksArr.push(0);
        hoursArr.push(0);
      } else {
        tasksArr.push(taskCount[user.id]);
        hoursArr.push(hourCount[user.id])
      }
    }
    return [tasksArr, hoursArr];
  }

  const countTasks = (tasks) => {
    const result = {};
    for(const task of tasks) {
      if(result.hasOwnProperty(task.userId)) {
        result[task.userId] += 1;
      } else {
        result[task.userId] =1;
      }
    }
    return result;
  }

  const countHours = (tasks) => {
    const result = {};
    for(const task of tasks) {
      if(result.hasOwnProperty(task.userId)) {
        result[task.userId] += task.timespan;
      } else {
        result[task.userId] =task.timespan;
      }
    }
    return result;
  }

  const filterLastWeek = (arr) => {
    const result = [];
    for(const obj of arr) {
      if(dateChecker(obj.timestamp, 7)) {
        result.push(obj);
      }
    }
    return result;
  }

  const dateChecker = (date, numDays) => {
    const dateMili = new Date(date).getTime();
    const currentDate = new Date();
    const daysAgo = new Date().setDate(currentDate.getDate() - numDays);

    return dateMili >= daysAgo;
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
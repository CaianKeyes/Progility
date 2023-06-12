import { useEffect, useState } from "react";
import { getCompletedTasks } from "../../apiServices/getCompleteTask";
import Navbar from "../navbar";
import BarChart from "./barChart";
import StatsHeader from "./statsHeader";
import { formatData, filterByDates } from '../../statsFunction'
import UserStats from "./userStats";

function Stats ({users, workspace, admin}) {
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
        setChart(renderBarCharts(resultTask, resultHour));
        break;

      case('2a'):
        const formattedTasksMonthly = formatData(filterByDates(completedTasks, 30),users);
        setChart(renderBarCharts(formattedTasksMonthly[0], formattedTasksMonthly[1]));
        break;

      case('3a'):
        const formattedTasksWeekly = formatData(filterByDates(completedTasks, 7),users);
        setChart(renderBarCharts(formattedTasksWeekly [0], formattedTasksWeekly [1]));
        break;

      case('4a'):
      setChart(<>
        <UserStats users={users}/>
      </>)
        break;
      default:
        console.log('selector does not exsist');
    }
    // eslint-disable-next-line
  }, [users, selector, completedTasks]);

  const renderBarCharts = (data1, data2) => {
    return <div>
      <h2 className="completed">Tasks Completed:</h2>
      <BarChart data={data1} users={users} />
      <h2 className="completed">Hours Completed:</h2>
      <BarChart data={data2} users={users} />
    </div>
  }

  const handleDataFromChild = (childData) => {
    setSelector(childData);
  }

  const renderHTML = () => {
    if (admin) {
      return <div>
        <StatsHeader users={users} onData={handleDataFromChild} />
        {chart}
      </div>
    } else {
      return <h2 className="error_msg">Only the admin can acess stats</h2>
    }
  }

  return <>
    <Navbar />
    
    {renderHTML()}
  </>
}

export default Stats;
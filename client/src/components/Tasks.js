import { useEffect, useState } from "react";
import { getActiveTasks } from "../apiServices/getActiveTasks";
import { getCompletedTasks } from "../apiServices/getCompleteTask";
import Navbar from "./navbar";
import TaskHeader from "./taskHeader";
import TaskList from "./taskList";

function Tasks({profile, workspace, users, passedTask}) {
  const [admin, setAdmin] = useState(false);
  const [generalTasks, setGeneralTasks] = useState([]);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [selector, setSelector] = useState('general');

  // handles sorting the data
  useEffect(() => {
    if (workspace.id) {
      getActiveTasks(workspace.activeTasksId).then(res => {
        setGeneralTasks(() => {
          const result = [];
          for (const task of res) {
            if (!task.userId) {
              result.push(task);
            }
          }
          return result;
        })
        setActiveTasks(() => {
          const result = [];
          for (const task of res) {
            if(task.userId) {
              result.push(task);
            }
          }
          return result;
        })
        setPersonalTasks(() => {
          const result = [];
          for (const task of res) {
            if(task.userId === profile.id) {
              result.push(task);
            }
          }
          return result;
        })
      });
      // gets completed tasks
      getCompletedTasks(workspace.completedTasksId).then(res => {
        setCompletedTasks(res);
      })
    }

    if (profile.id === workspace.adminId && profile.id) {
      setAdmin(true);
    }
  }, [workspace, profile]);

  useEffect(() => {
    if (selector === 'general'){
      setTaskList(generalTasks);
    } else if (selector === 'active') {
      setTaskList(activeTasks);
    } else if (selector === 'personal') {
      setTaskList(personalTasks);
    } else if (selector === 'completed') {
      setTaskList(completedTasks);
    }
  }, [generalTasks, activeTasks, personalTasks, selector, completedTasks]);

  // adds a task to genral if its created
  useEffect(() => {
    if(passedTask) {
      let boo = true;
      for (const task of generalTasks) {
        if (task.id === passedTask.id) {
          boo = false;
        }
      }
  
      if (boo) {
        setGeneralTasks((res) => [...res, passedTask]);
      }
    }
  }, [passedTask]);

  const hanndleDataFromChild = (childData) => {
    setSelector(childData);
  }

  // allows for button presses to be reactive
  const handleListSwitch = (method, task) => {
    switch (method) {
      case 'accept':
        setGeneralTasks((arr) => deleteFromList(arr, task.id));
        setPersonalTasks((arr) => [...arr, task]);
        break;
      case 'complete':
        setPersonalTasks((arr) => deleteFromList(arr, task.id));
        setActiveTasks((arr) => deleteFromList(arr, task.id));
        setCompletedTasks((arr) => [...arr, task]);
        break;
      case 'cancel':
        setPersonalTasks((arr) => deleteFromList(arr, task.id));
        setGeneralTasks((arr) => [...arr, task])
        break;
      default:
        console.log('method does not exsist');
    }
  }

  const deleteFromList = function (arr, id) {
    const result = [];
    for (const obj of arr) {
      if (obj.id !== id) {
        result.push(obj);
      }
    }
    return result;
  }

  return <>
  <Navbar admin={admin}/>
  <TaskHeader admin={admin} onData={hanndleDataFromChild} />
  <TaskList tasks={taskList} profile={profile} selector={selector} workspace={workspace} onData={handleListSwitch} users={users} />
  </>
}

export default Tasks;
import { useEffect, useState } from "react";
import { getActiveTasks, getCompletedTasks } from "../apiService";
import Navbar from "./navbar";
import TaskHeader from "./taskHeader";
import TaskList from "./taskList";

function Tasks({profile, workspace}) {
  const [admin, setAdmin] = useState(false);
  const [generalTasks, setGeneralTasks] = useState([]);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [selector, setSelector] = useState('general');

  useEffect(() => {
    if (workspace.id) {
      getActiveTasks(workspace.activeTasksId).then(res => {
        for (const task of res) {
          if (!task.userId) {
            setGeneralTasks((res) => [...res, task]);
          } else {
            setActiveTasks((res) => [...res, task]);
            if (task.userId == profile.id) {
              setPersonalTasks((res) => [...res, task]);
            }
          }
        }
      });
      // gets completed tasks
      getCompletedTasks(workspace.completedTasksId).then(res => {
        setCompletedTasks(res);
      })
    }

    if (profile.id === workspace.adminId && profile.id) {
      setAdmin(true);
    }
  }, [workspace]);

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
  }, [generalTasks, activeTasks, personalTasks, selector]);

  const hanndleDataFromChild = (childData) => {
    setSelector(childData);
  }

  const handleListSwitch = (method, task) => {
    switch (method) {
      case 'accept':
        setGeneralTasks((arr) => deleteFromList(arr, task.id));
        setPersonalTasks((arr) => [...arr, task]);
        break;
      case 'complete':
        setPersonalTasks((arr) => deleteFromList(arr, task.id));
        setActiveTasks((arr) => deleteFromList(arr, task.id));
        break;
      case 'cancel':
        break;
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
  <Navbar />
  <TaskHeader admin={admin} onData={hanndleDataFromChild} />
  <TaskList tasks={taskList} profile={profile} selector={selector} workspace={workspace} onData={handleListSwitch} />
  </>
}

export default Tasks;
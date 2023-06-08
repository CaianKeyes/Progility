import { useEffect, useState } from "react";
import { getActiveTasks } from "../apiService";
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
            console.log(generalTasks);
            if (generalTasks.length == 0) setGeneralTasks([task]);
            setGeneralTasks((res) => [...res, task]);
          } else {
            setActiveTasks((res) => [...res, task]);
          }
        }
      });
    }

    if (profile.id == workspace.adminId && profile.id) {
      setAdmin(true);
    }
  }, [workspace]);

  useEffect(() => {
    if (selector == 'general') setTaskList(generalTasks);
  }, [generalTasks])

  const hanndleDataFromChild = (childData) => {
    setSelector(childData);
    switch (childData) {
      case 'general':
        setTaskList(generalTasks);
        break;
      case 'personal':
        setTaskList(personalTasks);
        break;
      case 'active':
        setTaskList(activeTasks);
        break;
      case 'completed':
        setTaskList(completedTasks);
        break;

      default:
        console.log('defaulted');
    }
  }

  return <>
  <Navbar />
  <TaskHeader admin={admin} onData={hanndleDataFromChild} />
  <TaskList tasks={taskList} />
  </>
}

export default Tasks;
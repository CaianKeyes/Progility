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
          console.log(task);
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
    }

    if (profile.id == workspace.adminId && profile.id) {
      setAdmin(true);
    }
  }, [workspace]);

  useEffect(() => {
    if (selector == 'general'){
      setTaskList(generalTasks);
    } else if (selector == 'active') {
      setTaskList(activeTasks);
    } else if (selector == 'personal') {
      setTaskList(personalTasks);
    }
  }, [generalTasks, selector]);

  const hanndleDataFromChild = (childData) => {
    setSelector(childData);
  }

  return <>
  <Navbar />
  <TaskHeader admin={admin} onData={hanndleDataFromChild} />
  <TaskList tasks={taskList} profile={profile} selector={selector} workspace={workspace} />
  </>
}

export default Tasks;
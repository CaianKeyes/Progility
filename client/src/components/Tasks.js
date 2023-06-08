import { useEffect, useState } from "react";
import { getActiveTasks } from "../apiService";
import Navbar from "./navbar";
import TaskList from "./taskList";

function Tasks(profile) {
  const [activeTasks, setActiveTasks] = useState([]);

  useEffect(() => {
    if (profile.workspace.id) {
      getActiveTasks(profile.workspace.activeTasksId).then(res => {
        setActiveTasks(res);
        console.log(res);
      });
    }
  }, [profile.workspace])

  return <>
  <Navbar />
  <TaskList tasks={activeTasks} />
  </>
}

export default Tasks;
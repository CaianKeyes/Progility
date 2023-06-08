import { useEffect, useState } from "react";
import { getActiveTasks } from "../apiService";
import Navbar from "./navbar";
import TaskHeader from "./taskHeader";
import TaskList from "./taskList";

function Tasks({profile, workspace}) {
  const [activeTasks, setActiveTasks] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (workspace.id) {
      getActiveTasks(workspace.activeTasksId).then(res => {
        setActiveTasks(res);
      });
    }

    if (profile.id == workspace.adminId && profile.id) {
      setAdmin(true);
    }
  }, [workspace])

  return <>
  <Navbar />
  <TaskHeader admin={admin} />
  <TaskList tasks={activeTasks} />
  </>
}

export default Tasks;
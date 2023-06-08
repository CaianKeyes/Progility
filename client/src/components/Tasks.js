import { useEffect } from "react";
import Navbar from "./navbar";
import TaskList from "./taskList";

function Tasks(profile, workspace) {

  useEffect(() => {
    
  }, [workspace])

  return <>
  <Navbar />
  <TaskList />
  </>
}

export default Tasks;
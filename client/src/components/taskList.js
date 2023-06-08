import { useEffect } from "react";
import Task from "./task";

function TaskList({tasks}) {

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  const mappedTasks = tasks.map(task => (
    <Task key={task.id} task={task} />
  ))

  return<>
     <ul>
        {mappedTasks}
    </ul>
  </>
}

export default TaskList;
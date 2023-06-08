import { useEffect } from "react";
import Task from "./task";

function TaskList({tasks, profile, selector, workspace}) {

  const mappedTasks = tasks.map(task => (
    <Task key={task.id} task={task} profile={profile} selector={selector} workspace={workspace} />
  ))

  return<>
     <ul>
        {mappedTasks}
    </ul>
  </>
}

export default TaskList;
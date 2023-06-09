import Task from "./task";

function TaskList({tasks, profile, selector, workspace, onData, users}) {

  const mappedTasks = tasks.map(task => (
    <Task key={task.id} task={task} profile={profile} selector={selector} workspace={workspace} onData={onData} users={users} />
  ))

  return<div className="mappedTasks">
     <ul>
        {mappedTasks}
    </ul>
  </div>
}

export default TaskList;
import { useEffect, useState } from "react";
import { acceptTask, completeTask } from "../apiService";

function Task ({task, profile, selector, workspace}) {
  const [taskBtn, setTaskBtn] = useState('');

  const handleAccept = () => {
    acceptTask(profile.id, task.id);
  }

  const handleComplete = () => {
    completeTask(profile.id, task.id, workspace.id);
  }

  useEffect(() => {
    if (selector == 'general') {
      setTaskBtn(<button onClick={handleAccept}>Accept</button>)
    } else if (selector == 'personal') {
      setTaskBtn(<div>
        <button onClick={handleComplete} className="submit">Complete</button>
        <button className="submit">Cancel</button>
      </div>)
    } else if (selector == 'active') {
      setTaskBtn(<p>User:</p>)
    }
  }, [selector])

  return <div>
    <h2>{task.title}</h2>
    <p>{task.timespan}h</p>
    <p>{task.timestamp}</p>
    {taskBtn}
  </div>
}

export default Task;
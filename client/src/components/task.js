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
      setTaskBtn(<button className="submit accept" onClick={handleAccept}>Accept</button>)
    } else if (selector == 'personal') {
      setTaskBtn(<div className="accept">
        <button onClick={handleComplete} className="submit personal_button">Complete</button>
        <br />
        <button className="submit personal_button">Cancel</button>
      </div>)
    } else if (selector == 'active') {
      setTaskBtn(<p className="form">User:</p>)
    }
  }, [selector])

  return <div className="task">
    <div className="left">
      <h2 className="form">{task.title}</h2>
      <p className="form timespan">{task.timespan}h</p>
    </div>
    <div className="right">
      {taskBtn}
      <p className="form">{new Date(task.timestamp).toLocaleString()}</p>
    </div>
  </div>
}

export default Task;
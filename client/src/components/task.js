import { useEffect, useState } from "react";
import { acceptTask } from "../apiService";

function Task ({task, profile, selector}) {
  const [taskBtn, setTaskBtn] = useState('');

  const handleAccept = () => {
    acceptTask(profile.id, task.id);
  }

  const handleComplete = () => {
    
  }

  useEffect(() => {
    if (selector == 'general') {
      setTaskBtn(<button onClick={handleAccept}>Accept</button>)
    } else if (selector == 'personal') {
      setTaskBtn(<div>
        <button className="submit">Complete</button>
        <button className="submit">Cancel</button>
      </div>)
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
import { useEffect } from "react";
import { acceptTask } from "../apiService";

function Task ({task, profile}) {
  const handleAccept = () => {
    acceptTask(profile.id, task.id);
  }

  return <div>
    <h2>{task.title}</h2>
    <p>{task.timespan}h</p>
    <p>{task.timestamp}</p>
    <button onClick={handleAccept}>Accept</button>
  </div>
}

export default Task;
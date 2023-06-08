import { useEffect } from "react";

function Task ({task}) {
  const handleAccept = () => {
    
  }

  return <div>
    <h2>{task.title}</h2>
    <p>{task.timespan}h</p>
    <p>{task.timestamp}</p>
    <button onClick={handleAccept}>Accept</button>
  </div>
}

export default Task;
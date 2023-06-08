import { useEffect } from "react";

function Task ({task}) {

  useEffect(() => {
    console.log(task);
  }, [task])

  return <div>
    <h2>{task.title}</h2>
    <p>{task.timespan}h</p>
    <p>{task.timestamp}</p>
    <button>Accept</button>
  </div>
}

export default Task;
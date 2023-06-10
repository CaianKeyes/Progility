import { useEffect, useState } from "react";
import { acceptTask, cancelTask, completeTask } from "../apiService";

function Task ({task, profile, selector, workspace, onData, users}) {
  const [taskBtn, setTaskBtn] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [extend, setExtend] = useState(false);
  const [arrow, setArrow] = useState('down_arrow');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (extend) {
      setArrow('up_arrow');
      setExtraInfo(
        <div>
          <p className="description">{task.description}</p>
          <ul className="requiremnets">
            {task.requirements.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )
    } else {
      setArrow('down_arrow');
      setExtraInfo('');
    }
  }, [extend, task]);

  useEffect(() => {
    if (task.userId !== null) {
      for(const user of users) {
        if(user.id === task.userId) {
          setUsername(user.username);
        }
      }
    }
  }, [users, task])

  const handleAccept = () => {
    acceptTask(profile.id, task.id);
    onData('accept', task);
  };

  const handleComplete = () => {
    completeTask(profile.id, task.id, workspace.id, task.timespan);
    onData('complete', task);
  }

  const handleCancel = () => {
    cancelTask(task.id);
    onData('cancel', task);
  }

  const handleArrow = () => {
    if (extend) {
      setExtend(false);
    } else {
      setExtend(true);
    }
  }

  useEffect(() => {
    if (selector === 'general') {
      setTaskBtn(<button className="submit accept" onClick={handleAccept}>Accept</button>)
    } else if (selector === 'personal') {
      setTaskBtn(<div className="accept">
        <button onClick={handleComplete} className="submit personal_button">Complete</button>
        <br />
        <button onClick={handleCancel} className="submit personal_button">Cancel</button>
      </div>)
    } else if (selector === 'active' || selector === 'completed') {
      setTaskBtn(<p className="form">User: {username}</p>)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, username]);

  return <div className="task">
    <div className="left">
      <h2 className="form">{task.title}</h2>
      {extraInfo}
      <div className="time_btn">
        <p className="form timespan">{task.timespan}h</p>
          <div onClick={handleArrow} className={arrow}></div>
      </div>
    </div>
    <div className="right">
      {taskBtn}
      <p className="form">{new Date(task.timestamp).toLocaleString()}</p>
    </div>
  </div>
}

export default Task;
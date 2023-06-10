import { useEffect, useState } from "react";

function TaskHeader({admin, onData}) {
  const [active, setActive] = useState('');
  const [completed, setCompleted] = useState('');

  const handleClickGeneral = () => {
    onData('general');
  }

  const handleClickPersonal = () => {
    onData('personal');
  }

  const handleClickActive = () => {
    onData('active');
  }

  const handleClickCompleted = () => {
    onData('completed');
  }

  useEffect(() => {
    if (admin) {
      setActive(<h2 onClick={handleClickActive}>Active</h2>)
      setCompleted(<h2 onClick={handleClickCompleted}>Completed</h2>)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin])

  return <div className="header">
    <h2 onClick={handleClickGeneral}>General</h2>
    <h2 onClick={handleClickPersonal}>Personal</h2>
    {active}
    {completed}
  </div>
}

export default TaskHeader;
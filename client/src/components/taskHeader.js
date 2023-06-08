import { useEffect, useState } from "react";

function TaskHeader({admin, onData}) {
  const [active, setActive] = useState('');
  const [completed, setCompleted] = useState('');
  const [selector, setSelector] = useState('general')

  useEffect(() => {
    console.log(admin);
    if (admin) {
      setActive(<h2>Active</h2>)
      setCompleted(<h2>completed</h2>)
    }
  }, [admin])

  const handleClickGeneral = () => {

  }

  const handleClickPersonal = () => {
    
  }

  const handleClickActive = () => {
    
  }

  const handleClickCompleted = () => {
    
  }

  return <div className="header">
    <h2 onClick={handleClickGeneral}>General</h2>
    <h2>Personal</h2>
    {active}
    {completed}
  </div>
}

export default TaskHeader;
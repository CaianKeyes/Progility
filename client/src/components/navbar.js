import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar ({admin}) {
  const [adminNav1, setAdminNav1] = useState('');
  const [adminNav2, setAdminNav2] = useState('');
  const navigate = useNavigate();

  const handleTasks = () => {
    navigate('/tasks');
  }

  const handleCreate = () => {
    navigate('/create');
  }

  const handleStats = () => {
    navigate('/stats')
  }

  useEffect(() => {
    if(admin) {
      setAdminNav1(<p onClick={handleCreate}className="nav_link">Create Task</p>);
      setAdminNav2(<p onClick={handleStats}className="nav_link">Stata</p>)
    }
  }, [admin])

  return <div className="navbar">
    <p className="logo">PROGILITY</p>

    <div className="navlinks">
      <p onClick={handleTasks} className="nav_link">Tasks</p>
      {adminNav1}
      {adminNav2}
    </div>
  </div>
}

export default Navbar;
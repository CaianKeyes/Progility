import { useNavigate } from "react-router-dom";

function Navbar () {
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

  return <div className="navbar">
    <p className="logo">PROGILITY</p>

    <div className="navlinks">
      <p onClick={handleTasks} className="nav_link">Tasks</p>
      <p onClick={handleCreate} className="nav_link">Create Task</p>
      <p onClick={handleStats} className="nav_link">Stats</p>
    </div>
  </div>
}

export default Navbar;
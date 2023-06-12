import { useEffect, useState } from "react";
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { getUsers } from "./apiServices/getUsers";
import { getWorkspace } from "./apiServices/getWorkspace";
import Login from "./components/login";
import Register from "./components/register";
import Create from "./components/Create";
import Tasks from './components/Tasks';
import './App.css';
import Stats from "./components/stats/stats";

function App() {
  const [profile, setProfile] = useState('');
  const [workspace, setWorkspace] = useState('');
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [task, setTask] = useState(false);

  const handleDataFromChildren = async (childData) => {
    setProfile(childData);
    if (childData.workspaceId) {
      const res = await getWorkspace(childData);
      setWorkspace(res);
      const res2 = await getUsers(res.groupIds);
      setUsers(res2);
    }
  }

  const handleTaskFromCreate = (childTask) => {
    setTask(childTask);
  }

  useEffect(() => {
    const isAdmin = profile.id === workspace.adminId;
    if(isAdmin && workspace.id) {
      setAdmin(true)
    }
  }, [profile, workspace]);


  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login onData={handleDataFromChildren}/>
    },
    {
      path: '/register',
      element: <Register profile={profile} onData={handleDataFromChildren}/>
    },
    {
      path: '/create',
      element: <Create profile={profile} users={users} admin={admin} onData={handleTaskFromCreate}/>
    },
    {
      path: '/Tasks',
      element: <Tasks profile={profile} workspace={workspace} users={users} passedTask={task} />
    },
    {
      path: '/stats',
      element: <Stats users={users} workspace={workspace} admin={admin}/>
    },
    {
      path: '*',
      element: <Login onData={handleDataFromChildren}/>
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;

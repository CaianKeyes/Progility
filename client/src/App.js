import { useState } from "react";
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { getUsers, getWorkspace } from "./apiService";
import Login from "./components/login";
import Register from "./components/register";
import Create from "./components/Create";
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [profile, setProfile] = useState('');
  const [workspace, setWorkspace] = useState('');
  const [users, setUsers] = useState([]);

  const handleDataFromChildren = async (childData) => {
    setProfile(childData);
    if (childData.workspaceId) {
      const res = await getWorkspace(childData);
      setWorkspace(res);
      const res2 = await getUsers(res.groupIds);
      setUsers(res2);
    }
  };

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
      element: <Create profile={profile} users={users}/>
    },
    {
      path: '/Tasks',
      element: <Tasks profile={profile} workspace={workspace} users={users} />
    },
    {
      path: '*',
      element: <Login onData={handleDataFromChildren}/>
    }
  ]);


  return <RouterProvider router={router} />
}

export default App;

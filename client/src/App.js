import { useState } from "react";
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { getWorkspace } from "./apiService";
import Login from "./components/login";
import Register from "./components/register";
import Create from "./components/Create";
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [profile, setProfile] = useState('');
  const [workspace, setWorkspace] = useState('');

  const handleDataFromChildren = async (childData) => {
    setProfile(childData);
    const res = await getWorkspace(childData);
    setWorkspace(res);
    console.log(res);
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
      element: <Create profile={profile}/>
    },
    {
      path: '/Tasks',
      element: <Tasks profile={profile} workspace={workspace} />
    },
    {
      path: '*',
      element: <Login onData={handleDataFromChildren}/>
    }
  ]);


  return <RouterProvider router={router} />
}

export default App;

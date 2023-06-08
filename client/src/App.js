import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import Create from "./components/Create";
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const [profile, setProfile] = useState('');

  const handleDataFromChildren = (childData) => {
    setProfile(childData);
  }

  return <>
    <Login onData={handleDataFromChildren}/>
    <Register 
    onData={handleDataFromChildren}
    profile={profile}
    />
    <Create />
    <Tasks />
  </>
}

export default App;

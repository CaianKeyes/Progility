import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";

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
  </>
}

export default App;

import { useState } from "react";
import { addUserToWorkspace } from "../apiServices/addUserToWorkspace";

function AddUser({workspaceId}) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail('');

    addUserToWorkspace(workspaceId, email);
  }

  return <div>
    <form onSubmit={handleSubmit} className="register">
      <h1 className="title form">Add a User to the Workspace</h1>
      <h2 className="form">Email:</h2>
      <input 
        type='email' 
        value={email || ''}
        onChange={e => setEmail(e.target.value)}
        className='form input'
      ></input>
      <button type="submit" className="submit">Add</button>
    </form>

  </div>
}

export default AddUser;
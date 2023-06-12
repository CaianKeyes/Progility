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
      <h2 className="title form">Add a User to the Workspace</h2>
      <h3 className="form">Email:</h3>
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
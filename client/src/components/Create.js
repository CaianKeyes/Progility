import { useState } from "react";
import { acceptTask, createTask } from "../apiService";
import AddUser from "./addUser";
import Navbar from "./navbar";

function Create({profile, users}) {
  const [title, setTitle] = useState('');
  const [timeSpan, setTimespan] = useState('');
  const [description, setDescription] = useState('');
  const [requirments, setRequirments] = useState('');
  const [requirmentsList, setRequirmentsList] = useState([]);
  const [location, setLocation] = useState('');

  const handleAdd = (e) => {
    console.log(profile.workspaceId);
    e.preventDefault();

    setRequirmentsList([...requirmentsList, requirments]);
    setRequirments('');
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!title || !timeSpan) {
      alert('Title and Timespan are required feilds');
    } else {
      setTitle('');
      setDescription('');
      setTimespan('');
      setRequirments('')
      setRequirmentsList([]);
    }

    if (profile.workspaceId) {
      const task = await createTask({
        wID: profile.workspaceId,
        title: title,
        timespan: timeSpan,
        description: description,
        requirements: requirmentsList,
      })
      if (location !== 'general') {
        acceptTask(location, task.id);
      }
    }
  }

  return <>
    <Navbar />

    <form className="register" onSubmit={handleSubmit}>
      <h2 className="form title">Create Task</h2>
      <h3 className='form'>Title:</h3>
        <input 
          type='text' 
          value={title || ''}
          onChange={e => setTitle(e.target.value)}
          className='form input'
        ></input>

        <h3 className='form'>Description:</h3>
        <input 
          type='text' 
          value={description || ''}
          onChange={e => setDescription(e.target.value)}
          className='form input'
        ></input>

        <h3 className='form'>Timespan:</h3>
        <input 
          type='number' 
          value={timeSpan || ''}
          onChange={e => setTimespan(e.target.value)}
          className='form number'
        ></input>

        <h3 className='form'>Requirments:</h3>
        <input 
          type='text' 
          value={requirments || ''}
          onChange={e => setRequirments(e.target.value)}
          className='form req_input'
        ></input>
        <button className="form add" onClick={handleAdd}>Add</button>

        <ul>
          {requirmentsList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className='form'>Location:</h3>
        <select className="dropdown" value={location} onChange={e => setLocation(e.target.value)}>
          <option value='general'>General</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>

        <br />
        <button className='form submit' type='submit'>Create</button>
    </form>

    <AddUser workspaceId={profile.workspaceId} />
  </>
}

export default Create;
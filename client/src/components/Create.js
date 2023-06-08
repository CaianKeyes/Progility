import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const [timeSpan, setTimespan] = useState('');
  const [description, setDescription] = useState('');
  const [requirments, setRequirments] = useState('');

  return <>
    <form className="register">
      <h2 className="form title">Create Task</h2>
      <h3 className='form'>Title:</h3>
        <input 
          type='text' 
          value={title || ''}
          onChange={e => setTitle(e.target.value)}
          className='form input'
        ></input>
    </form>
  </>
}

export default Create;
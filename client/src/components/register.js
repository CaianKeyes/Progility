import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createWorkspace, register } from '../apiService';
import '../App.css';

function Register({ onData, profile }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckbox = e => {
    setIsChecked(e.target.checked);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert('please fill in the required feilds');
      return;
    } else if (password.length < 8) {
      alert('password must be 8 charachters or more');
      return;
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password)) {
      alert('password must contain both letters and numbers');
      return;
    }

    setUsername('');
    setEmail('');
    setPassword('');

    const userProfile = await register({ username, email, password });
    if (!userProfile) {
      alert('an acount with this email already esists');
      return;
    }
    onData(userProfile);

    if (userProfile.id && isChecked) {
      const space = await createWorkspace(userProfile);
      console.log(space);
    }

    if (typeof userProfile) {
      navigate('/tasks')
    }
  }

  return <>
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <h2 className='form title'>Sign-up</h2>

        <h3 className='form'>Username:</h3>
        <input 
          type='text' 
          value={username || ''}
          onChange={e => setUsername(e.target.value)}
          className='form input'
        ></input>

        <h3 className='form'>Email:</h3>
        <input 
          type='email' 
          value={email || ''}
          onChange={e => setEmail(e.target.value)}
          className='form input'
        ></input>

        <h3 className='form'>Password:</h3>
        <input 
          type='password' 
          value={password || ''}
          onChange={e => setPassword(e.target.value)}
          className='form input'
        ></input>

        <h3 className='form'>Admin:</h3>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckbox}
          className='form check'
        ></input>
        <br />

        <button className='form submit' type='submit'>Sign-Up</button>
      </form>
    </div>
  </>
}

export default Register;
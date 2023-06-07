import { useState } from 'react';
import { login } from '../apiService'
import '../App.css';

function Login({ onData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');

    const profile = await login({ email, password });
    onData(profile);
  }

  return <>
    <form className='register' onSubmit={handleSubmit}>
      <h2 className='form title'>Login</h2>
      <h3 className='form'>Email:</h3>
      <input 
        className='form input'
        type='email' 
        value={email || ''}
        onChange={e => setEmail(e.target.value)}
      ></input>
      <h3 className='form'>Password:</h3>
      <input 
        className='form input'
        type='password' 
        value={password || ''}
        onChange={e => setPassword(e.target.value)}
      ></input>
      <button className='submit' type='submit'>Login</button>
    </form>
  </>
}

export default Login;
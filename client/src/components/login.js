import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiServices/login'
import '../App.css';

function Login({ onData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    setEmail('');
    setPassword('');

    const profile = await login({ email, password });
    if (!profile) {
      alert('username or password was incorrect')
      return;
    }
    onData(profile);

    if (profile !== '') {
      navigate('/tasks');
    }
  }

  const handleRegister = e => {
    navigate('/register');
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

      <button type='button' onClick={handleRegister} className='form submit' >Sign-Up</button>
    </form>
  </>
}

export default Login;
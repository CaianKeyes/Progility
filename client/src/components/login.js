import { useState } from 'react';
import { login } from '../apiService'

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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <h3>email:</h3>
      <input 
        type='email' 
        value={email || ''}
        onChange={e => setEmail(e.target.value)}
      ></input>
      <h3>password:</h3>
      <input 
        type='password' 
        value={password || ''}
        onChange={e => setPassword(e.target.value)}
      ></input>
      <button type='submit'>Login</button>
    </form>
  </>
}

export default Login;
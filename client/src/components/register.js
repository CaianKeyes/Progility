import { useEffect, useState } from 'react';
import { register } from '../apiService';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    console.log(data);
  }, [data]);

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

    const profile = await register({ username, email, password });
    setData(profile);
  }

  return <>
    <form onSubmit={handleSubmit}>
      <h2>Sign-up</h2>
      <h3>username:</h3>
      <input 
        type='text' 
        value={username || ''}
        onChange={e => setUsername(e.target.value)}
      ></input>
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
    <div>
      <h1>Profile:</h1>
      <p>username: {data.username}</p>
      <p>email: {data.email}</p>
    </div>
  </>
}

export default Register;
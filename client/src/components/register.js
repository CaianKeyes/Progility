import { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
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

    console.log(username, email, password);
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
  </>
}

export default Register;
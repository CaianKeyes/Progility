export async function register(user) {
  const res = await fetch('http://localhost:3003/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user.username,
      email: user.email,
      password: user.password,
    })
  })
  const json = await res.json();
  return json;
}

export async function login(user) {
  const res = await fetch('http://localhost:3003/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    })
  })
  const json = await res.json();
  return json;
}
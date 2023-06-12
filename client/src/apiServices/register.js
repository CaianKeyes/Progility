export async function register(user) {
  try {
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
    try {
      const json = await res.json();
      return json;
    } catch(err) {
      return false;
    }
  } catch(err) {
    console.error(err);
    return 'registration failed'
  }
}
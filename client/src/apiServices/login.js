export async function login(user) {
  try {
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
    try {
      const json = await res.json();
      return json;
    } catch (err) {
      return false;
    }
  } catch(err) {
    console.error(err);
    return 'login failed'
  }
}
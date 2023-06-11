export async function createWorkspace(user) {
  const res = await fetch('http://localhost:3003/workspace', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: user.id
    })
  })
  const json = await res.json();
  return json;
}
export async function addUserToWorkspace(id, email) {
  await fetch('http://localhost:3003/users/add', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, email })
  });
}
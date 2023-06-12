export async function addUserToWorkspace(id, email) {
  try {
    await fetch('http://localhost:3003/users/add', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, email })
    });
  
    console.log('data updated sucessfully');
    return 'data updated sucessfully';
  } catch(err) {
    console.error(err);
    return 'data updated failed'
  }
}
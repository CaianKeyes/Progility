export async function createWorkspace(user) {
  try{
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
  } catch(err) {
    console.error(err);
    return 'data upload failed'
  }
}
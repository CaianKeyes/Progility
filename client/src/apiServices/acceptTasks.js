export async function acceptTask(userId, taskId) {
  try {
    await fetch('http://localhost:3003/tasks/accept', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, taskId })
    })
  
    console.log('data updated sucessfully');
    return 'data updated sucessfully';
  } catch(err) {
    console.error(err);
    return 'data updated failed'
  }
}
export async function cancelTask(id) {
  try {
    await fetch('http://localhost:3003/tasks/cancel', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
  
    console.log('data updated sucessfully');
    return 'data updated sucessfully';
  } catch(err) {
    console.error(err);
    return 'data updated failed'
  }
}
export async function completeTask(userId, taskId, workspaceId, timespan) {
  try {
    await fetch('http://localhost:3003/tasks/complete', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, taskId, workspaceId, timespan })
    })
  
    console.log('data updated sucessfully');
    return 'data updated sucessfully';
  } catch(err) {
    console.error(err);
    return 'data updated failed'
  }
}
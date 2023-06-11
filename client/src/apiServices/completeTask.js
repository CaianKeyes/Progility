export async function completeTask(userId, taskId, workspaceId, timespan) {
  await fetch('http://localhost:3003/tasks/complete', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, taskId, workspaceId, timespan })
  })
}
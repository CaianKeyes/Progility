export async function cancelTask(id) {
  await fetch('http://localhost:3003/tasks/cancel', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  });

  console.log('data updated sucessfully');
  return 'data updated sucessfully';
}
export async function createTask(task) {
  const res = await fetch('http://localhost:3003/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      wID: task.wID,
      title: task.title,
      timespan: task.timespan,
      description: task.description,
      requirements: task.requirements,
    })
  })
  const json = await res.json();
  return json;
}
export async function register(user) {
  const res = await fetch('http://localhost:3003/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user.username,
      email: user.email,
      password: user.password,
    })
  })
  const json = await res.json();
  return json;
}

export async function login(user) {
  const res = await fetch('http://localhost:3003/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    })
  })
  const json = await res.json();
  return json;
}

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
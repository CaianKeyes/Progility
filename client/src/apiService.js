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
  try {
    const json = await res.json();
    return json;
  } catch(err) {
    return false;
  }
}

export async function login(user) {
  const res = await fetch('http://localhost:3003/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'user1@gmail.com',
      password: 'user1_123',
    })
  })
  try {
    const json = await res.json();
    return json;
  } catch (err) {
    return false;
  }
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

export async function getWorkspace(user) {
  const res = await fetch(`http://localhost:3003/workspaces/${user.workspaceId}`);

  const json = await res.json();
  return json;
}

export async function getActiveTasks(arr) {
  const res = await fetch(`http://localhost:3003/tasks/[${arr}]`);

  const json = await res.json();
  return json;
}

export async function acceptTask(userId, taskId) {
  await fetch('http://localhost:3003/tasks/accept', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, taskId })
  })
}

export async function completeTask(userId, taskId, workspaceId, timespan) {
  await fetch('http://localhost:3003/tasks/complete', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, taskId, workspaceId, timespan })
  })
}

export async function getCompletedTasks(arr) {
  const res = await fetch(`http://localhost:3003/tasks/complete/[${arr}]`);

  const json = await res.json();
  return json;
}

export async function addUserToWorkspace(id, email) {
  await fetch('http://localhost:3003/users/add', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, email })
  });
}

export async function cancelTask(id) {
  await fetch('http://localhost:3003/tasks/cancel', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  });
}

export async function getUsers(arr) {
  const res = await fetch(`http://localhost:3003/users/[${arr}]`);

  const json = await res.json();
  return json;
}
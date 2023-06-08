const Tasks = require('./models/tasks');
const Users = require('./models/users');
const Workspaces = require('./models/workspace');

async function getUsers (ctx) {
  const users = await Users.findAll();
  ctx.body = users;
}

async function getWorkspaces (ctx) {
  const workspaces = await Workspaces.findAll();
  ctx.body = workspaces;
}

async function getTasks (ctx) {
  const tasks = await Tasks.findAll();
  ctx.body = tasks;
}

async function register (ctx) {
  const user = await Users.findOne({
    where: { email: ctx.request.body.email }
  });

  if (user) {
    ctx.body = 'Email already exsists';
    console.log('Email already exsists');
  } else {
    const newUser = await Users.create({
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      password: ctx.request.body.password,
      tasksCompleted: 0,
      hoursCompleted: 0,
    });
    
    ctx.body = newUser;
  }
}

async function login (ctx) {
  const user = await Users.findOne({
    where: {email: ctx.request.body.email}
  });

  if (!user) {
    ctx.status = 404;
    ctx.body = 'email incorrect';
  } else if (user.password !== ctx.request.body.password) {
    ctx.status = 404;
    ctx.body = 'password incorrect';
  } else {
    ctx.status = 200;
    ctx. body = user;
  }
}

async function workspace (ctx) {
  const workspace = await Workspaces.create({
    adminId: ctx.request.body.userID,
    groupIds: [ctx.request.body.userID],
  })

  await Users.update(
    { workspaceId: workspace.id },
    { where: { id: ctx.request.body.userID } }
  )

  ctx.body = workspace;
}

async function createTask (ctx) {
  const task = await Tasks.create({
    title: ctx.request.body.title,
    timespan: ctx.request.body.timespan,
    timestamp: new Date(),
    description: ctx.request.body.description,
    requirements: ctx.request.body.requirements
  })

  // gets the workplace, allowing us to get the array to add to it
  const workspace = await Workspaces.findOne({
    where: {
      id: ctx.request.body.wID
    }
  });

  if (!workspace) {
    ctx.status = 404;
    ctx.body = 'Workspace not found';
    return;
  }

  if(!workspace.activeTasksId) {
    await Workspaces.update(
      {activeTasksId: [task.id]},
      {where: { id: workspace.id } }
    )
  } else {
    await Workspaces.update(
      {activeTasksId: [...workspace.activeTasksId, task.id]},
      {where: { id: workspace.id } }
    )
  }

  ctx.body = task;
}

async function getWorkspace (ctx) {
  const workspace = await Workspaces.findOne({
    where: {id: ctx.params.id}
  })
  console.log(workspace);
  ctx.body = workspace;
}

module.exports = {
  getUsers,
  register,
  login,
  workspace,
  getWorkspaces,
  createTask,
  getTasks,
  getWorkspace
}
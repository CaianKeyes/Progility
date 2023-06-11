const Tasks = require('../models/tasks');
const Users = require('../models/users');
const Workspaces = require('../models/workspace');

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

module.exports = { getUsers, getWorkspaces, getTasks};
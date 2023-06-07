const Tasks = require('./models/tasks');
const Users = require('./models/users');
const Workspaces = require('./models/workspace');

async function getUsers (ctx) {
  const users = await Users.findAll();
  ctx.body = users;
}

module.exports = {
  getUsers,
}
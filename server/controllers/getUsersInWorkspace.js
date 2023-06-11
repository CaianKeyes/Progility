const Users = require('../models/users');

async function getUsersInAWorkplace (ctx) {
  const users = await Users.findAll({ 
      where: { id: JSON.parse(ctx.params.ids) },
      attributes: ['id', 'username', 'tasksCompleted', 'hoursCompleted']
  });
  ctx.body = users;
}

module.exports = getUsersInAWorkplace;
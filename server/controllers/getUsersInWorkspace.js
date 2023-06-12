const Users = require('../models/users');

async function getUsersInAWorkplace (ctx) {
  try {
    const users = await Users.findAll({ 
        where: { id: JSON.parse(ctx.params.ids) },
        attributes: ['id', 'username', 'tasksCompleted', 'hoursCompleted']
    });
    ctx.body = users;
  } catch(err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'user ids not found';
  }
}

module.exports = getUsersInAWorkplace;
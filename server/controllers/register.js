const bcrypt = require('bcrypt');
const Users = require('../models/users');

async function register (ctx) {
  const user = await Users.findOne({
    where: { email: ctx.request.body.email }
  });

  if (user) {
    ctx.body = 'Email already exsists';
  } else {
    const saltRounds = 10;
    const hash = await bcrypt.hash(ctx.request.body.password, saltRounds);
    const newUser = await Users.create({
      username: ctx.request.body.username,
      email: ctx.request.body.email,
      password: hash,
      tasksCompleted: 0,
      hoursCompleted: 0,
    });
    
    ctx.body = newUser;
  }
}

module.exports = register;
const bcrypt = require('bcrypt');
const Users = require('../models/users');

async function login (ctx) {
  const user = await Users.findOne({
    where: {email: ctx.request.body.email}
  });

  if (!user) {
    ctx.status = 404;
    ctx.body = 'email incorrect';
  } else if (!bcrypt.compare(ctx.request.body.password, user.password)) {
    ctx.status = 404;
    ctx.body = 'password incorrect';
  } else {
    ctx.status = 200;
    ctx. body = user;
  }
}

module.exports = login;
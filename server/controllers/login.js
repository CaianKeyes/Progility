const bcrypt = require('bcrypt');
const Users = require('../models/users');

async function login (ctx) {
  try {
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
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'login failed';
  }
}

module.exports = login;
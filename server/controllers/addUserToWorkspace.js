const { fn, col } = require('sequelize');
const Users = require('../models/users');
const Workspaces = require('../models/workspace');

async function addUserToWorkspace (ctx) {
  const user = await Users.findOne({
    where: { email: ctx.request.body.email }
  })
  
  if(!user.workspaceId) {
    await Users.update(
      {
        workspaceId: ctx.request.body.id
      },
      { where: { email: ctx.request.body.email } }
    )
  
    await Workspaces.update(
      {
        groupIds: fn('array_append', col('groupIds'),user.id)
      },
      { where: { id: ctx.request.body.id } }
    )
  }
}

module.exports = addUserToWorkspace;
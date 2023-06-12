const Users = require('../models/users');
const Workspaces = require('../models/workspace');

async function workspace (ctx) {
  try {
    const workspace = await Workspaces.create({
      adminId: ctx.request.body.userID,
      groupIds: [ctx.request.body.userID],
    })
  
    await Users.update(
      { workspaceId: workspace.id },
      { where: { id: ctx.request.body.userID } }
    )
  
    ctx.body = workspace;
  } catch(err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'workspace or user id not found';
  }
}

module.exports = workspace;
const Workspaces = require('../models/workspace');

async function getWorkspace (ctx) {
  try {
    const workspace = await Workspaces.findOne({
      where: {id: ctx.params.id}
    })
    ctx.body = workspace;
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'workspace id not found';
  }
}

module.exports = getWorkspace;
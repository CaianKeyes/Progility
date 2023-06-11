const Workspaces = require('../models/workspace');

async function getWorkspace (ctx) {
  const workspace = await Workspaces.findOne({
    where: {id: ctx.params.id}
  })
  ctx.body = workspace;
}

module.exports = getWorkspace;
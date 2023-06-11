const Tasks = require('../models/tasks');

async function cancelTask (ctx) {
  await Tasks.update(
    { userId: null },
    { where: { id: ctx.request.body.id } }
  )
}

module.exports = cancelTask;
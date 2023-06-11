const Tasks = require('../models/tasks');

async function acceptTask (ctx) {
  await Tasks.update(
    { userId: ctx.request.body.userId },
    { where: { id: ctx.request.body.taskId } }
  )
}

module.exports = acceptTask;
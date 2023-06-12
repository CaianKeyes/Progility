const Tasks = require('../models/tasks');

async function acceptTask (ctx) {
  try {
    await Tasks.update(
      { userId: ctx.request.body.userId },
      { where: { id: ctx.request.body.taskId } }
    )
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'task id not found';
  }
}

module.exports = acceptTask;
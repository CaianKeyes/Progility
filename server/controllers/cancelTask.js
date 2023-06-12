const Tasks = require('../models/tasks');

async function cancelTask (ctx) {
  try {
    await Tasks.update(
      { userId: null },
      { where: { id: ctx.request.body.id } }
    )
  } catch(err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'task id not found';
  }
}

module.exports = cancelTask;
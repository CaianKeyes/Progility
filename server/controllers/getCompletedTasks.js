const Tasks = require('../models/tasks');

async function getCompletedTasks (ctx) {
  try {
    const tasks = await Tasks.findAll({
      where: { id: JSON.parse(ctx.params.ids) }
    });
    ctx.body = tasks;
  } catch(err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'task ids not found';
  }
}

module.exports = getCompletedTasks;
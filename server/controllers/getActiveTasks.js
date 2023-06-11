const Tasks = require('../models/tasks');

async function getActiveTasks (ctx) {
  const tasks = await Tasks.findAll({
    where: { id: JSON.parse(ctx.params.ids) }
  });
  ctx.body = tasks;
}

module.exports = getActiveTasks;
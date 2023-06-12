const { fn, col } = require('sequelize');
const Users = require('../models/users');
const Workspaces = require('../models/workspace');

async function completeTask (ctx) {
  try {
    await Users.update(
      {
        activeTasksId: fn('array_remove', col('activeTasksId'), ctx.request.body.taskId)
      },
      { where: { id: ctx.request.body.userId } }
    );
  
    await Users.increment('tasksCompleted', {
      by: 1,
      where: { id: ctx.request.body.userId }
    })
  
    await Users.increment('hoursCompleted', {
      by: ctx.request.body.timespan,
      where: { id: ctx.request.body.userId }
    })
  
    await Workspaces.update(
      {
        activeTasksId: fn('array_remove', col   ('activeTasksId'), ctx.request.body.taskId)
      },
      { where: {id: ctx.request.body.workspaceId } }
    )
    
    await Workspaces.update(
      {
        completedTasksId: fn('array_append', col('completedTasksId'), ctx.request.body.taskId)
      },
      { where: { id: ctx.request.body.workspaceId } }
    )
  } catch(err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'user or workspace id not found';
  }
}

module.exports = completeTask;
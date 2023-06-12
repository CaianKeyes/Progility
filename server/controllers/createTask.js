const Tasks = require('../models/tasks');
const Workspaces = require('../models/workspace');

async function createTask (ctx) {
  try {
    const task = await Tasks.create({
      title: ctx.request.body.title,
      timespan: ctx.request.body.timespan,
      timestamp: new Date(),
      description: ctx.request.body.description,
      requirements: ctx.request.body.requirements
    })
  
    const workspace = await Workspaces.findOne({
      where: {
        id: ctx.request.body.wID
      }
    });
  
    if (!workspace) {
      ctx.status = 404;
      ctx.body = 'Workspace not found';
      return;
    }
  
    if(!workspace.activeTasksId) {
      await Workspaces.update(
        {activeTasksId: [task.id]},
        {where: { id: workspace.id } }
      )
    } else {
      await Workspaces.update(
        {activeTasksId: [...workspace.activeTasksId, task.id]},
        {where: { id: workspace.id } }
      )
    }
  
    ctx.body = task;
  } catch(err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = 'could not create task';
  }
}

module.exports = createTask;
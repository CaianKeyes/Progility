const Router = require('koa-router');
const { 
  getUsers,
  register,
  login,
  workspace,
  getWorkspaces,
  createTask,
  getTasks,
  getWorkspace,
  getActiveTasks,
  acceptTask,
  completeTask,
  getCompletedTasks,
  addUserToWorkspace,
  cancelTask,
  getUsersInAWorkplace
} = require('./controllers');

const router = new Router();

router.get('/', ctx => ctx.body = 'sup');
router.get('/users', ctx => getUsers(ctx));
router.get('/workspaces', ctx => getWorkspaces(ctx));
router.get('/tasks', ctx => getTasks(ctx));
router.post('/register', ctx => register(ctx));
router.post('/login', ctx => login(ctx));
router.post('/workspace', ctx => workspace(ctx));
router.post('/tasks', ctx => createTask(ctx));
router.get('/workspaces/:id', ctx => getWorkspace(ctx));
router.get('/tasks/:ids', ctx => getActiveTasks(ctx));
router.put('/tasks/accept', ctx => acceptTask(ctx));
router.put('/tasks/complete', ctx => completeTask(ctx));
router.get('/tasks/complete/:ids', ctx => getCompletedTasks(ctx));
router.put('/users/add', ctx => addUserToWorkspace(ctx));
router.put('/tasks/cancel', ctx => cancelTask(ctx));
router.get('/users/:ids', ctx => getUsersInAWorkplace(ctx));

module.exports = router;
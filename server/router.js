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
  acceptTask
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

module.exports = router;
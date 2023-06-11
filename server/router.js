const Router = require('koa-router');
const {getUsers, getWorkspaces, getTasks} = require('./controllers/tests');
const register = require('./controllers/register');
const login = require('./controllers/login');
const workspace = require('./controllers/workspace');
const createTask = require('./controllers/createTask');
const getWorkspace = require('./controllers/getWorkspace');
const getActiveTasks = require('./controllers/getActiveTasks');
const acceptTask = require('./controllers/acceptTask');
const completeTask = require('./controllers/completeTask');
const getCompletedTasks = require('./controllers/getCompletedTasks');
const addUserToWorkspace = require('./controllers/addUserToWorkspace');
const cancelTask = require('./controllers/cancelTask');
const getUsersInAWorkplace = require('./controllers/getUsersInWorkspace');

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
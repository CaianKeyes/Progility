const Router = require('koa-router');
const { 
  getUsers,
  register,
  login
} = require('./controllers');

const router = new Router();

router.get('/', ctx => ctx.body = 'sup');
router.get('/users', ctx => getUsers(ctx));
router.post('/register', ctx => register(ctx));
router.post('/login', ctx => login(ctx));

module.exports = router;
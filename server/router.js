const Router = require('koa-router');
const { getUsers } = require('./controllers');

const router = new Router();

router.get('/', ctx => ctx.body = 'sup');
router.get('/users', ctx => getUsers(ctx));

module.exports = router;
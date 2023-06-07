const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');
const router = require('./router');

const app = new Koa();
const port = 3003;

app.use(cors());
app.use(bodyparser());
app.use(router.routes());

app.listen(port, () => console.log(`listening at port ${port}`));
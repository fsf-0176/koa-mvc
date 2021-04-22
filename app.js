const Koa = require('koa');
const path = require('path')
const koajwt = require('koa-jwt');
const routers = require('./router');
const { initDb } = require('./database');
const static = require('koa-static');
const app = new Koa()
const koaBody = require('koa-body')
const { SECRET, port, verifyPath } = require('./config')
const a = require('./database/import')
a()
initDb()
// 做你需要判断的事情
app.use(koaBody());
app.use(async (ctx, next) => {

  if (ctx.header) {
    await next().catch(err => {
      console.log(err);
    })
  }
  else {
    ctx.status = 401
    ctx.body = {
      code: 401,
      msg: '请授权'
    }
  }
})
app.use(
  koajwt({
    secret: SECRET
  }).unless({
    path: verifyPath
  })
)
app.use(static(__dirname + '/public'));
for (const router in routers) {
  if (routers.hasOwnProperty(router)) {
    app.use(routers[router].routes())
  }
}
// importSql()
// 监听端口
app.listen(port, () => {
  console.log(`服务运行成功：localhost:${port}`);
})
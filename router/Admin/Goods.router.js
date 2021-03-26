
const { goodsController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin/goods', goodsController.index)

module.exports = router
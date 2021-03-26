const { orderController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin/order', orderController.index)

module.exports = router
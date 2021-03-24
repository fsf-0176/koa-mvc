const { orderContorller } = require('../../contorller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin/order', orderContorller.index)

module.exports = router
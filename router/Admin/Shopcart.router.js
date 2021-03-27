const Router = require('koa-router')
const router = new Router()
const { shopcartController } = require('../../controller')

router.get('/admin/shopcart',shopcartController.shopcart)

module.exports = router
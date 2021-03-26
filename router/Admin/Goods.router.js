
const { goodsController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin/goods', goodsController.index)
router.get('/admin/category',goodsController.category)

module.exports = router
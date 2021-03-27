
const { goodsController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin/goods', goodsController.index)
router.get('/admin/category',goodsController.category)
router.get('/admin/specification',goodsController.specification)

module.exports = router
const { indexController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()


router.get('/index/category',indexController.category)
router.get('/index/goods',indexController.goods)
router.get('/index/goods/detail',indexController.goodsDetail)

module.exports = router
const { indexController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()


router.get('/index/category',indexController.category)

module.exports = router
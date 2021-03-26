const { adminController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin',adminController.index)
router.post('/admin/login',adminController.login)
router.post('/admin/register',adminController.register)
module.exports = router
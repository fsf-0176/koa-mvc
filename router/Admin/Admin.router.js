const { adminContorller } = require('../../contorller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin',adminContorller.index)
router.post('/admin/login',adminContorller.login)
router.post('/admin/register',adminContorller.register)
module.exports = router
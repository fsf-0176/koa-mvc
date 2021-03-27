const { adminController } = require('../../controller')
const Router = require('koa-router')
const router = new Router()

router.get('/admin',adminController.index)
router.get('/admin/user',adminController.user)
router.get('/admin/ad',adminController.ad)
router.get('/admin/notice',adminController.notice)
router.get('/admin/show-setting',adminController.showSetting)
router.get('/admin/super',adminController.super)
router.post('/admin/login',adminController.login)
router.post('/admin/register',adminController.register)
module.exports = router
const { adminContorller } = require('../../contorller')
const Router = require('koa-router')
const router = new Router()

router.get('/',adminContorller.index)
router.get('/login',adminContorller.login)

module.exports = router
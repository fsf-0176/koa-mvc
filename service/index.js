const adminService = require('./Admin/Admin.service');
const orderService = require('./Admin/Order.service');
const goodsService = require('./Admin/Goods.service');
const shopcartService = require('./Admin/Shopcart.service');
const indexService = require('./Index/index.service')

module.exports = {
    adminService,
    orderService,
    goodsService,
    shopcartService,
    indexService
}
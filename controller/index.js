const adminController = require('./Admin/Admin.controller');
const orderController = require('./Admin/Order.controller');
const goodsController = require('./Admin/Goods.controller');
const shopcartController = require('./Admin/Shopcart.controller');
const indexController = require('./Index/index.controller')

module.exports = {
  adminController,
  orderController,
  goodsController,
  shopcartController,
  indexController
}
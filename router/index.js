/**
 *  路由出口文件
 */
const adminRouter = require('./Admin/Admin.router')
const orderRouter = require('./Admin/Order.router')
const goodsRouter = require('./Admin/Goods.router')
const shopcartRouter = require('./Admin/Shopcart.router')
module.exports = {
  adminRouter,
  orderRouter,
  goodsRouter,
  shopcartRouter
}
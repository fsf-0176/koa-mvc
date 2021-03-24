/**
 *  路由出口文件
 */
const adminRouter = require('./Admin/Admin.router')
const orderRouter = require('./Admin/Order.router')
module.exports = {
  adminRouter,
  orderRouter
}
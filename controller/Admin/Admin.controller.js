const { adminService } = require('../../service');
const { SECRET } = require('../../config'); // 获取配置文件密钥
const jwt = require('jsonwebtoken');
const os = require('os')
const { error, success } = require('../../utils/status')
module.exports = {
  async index(ctx) {
    const { goods, order, user, setting } = await adminService.index();
    ctx.body = { goods, order, user, setting }
  },
  async login(ctx) {
    const { username, password } = ctx.request.body
    if (username.trim() === '') {
      error(ctx, '用户名不能为空')
      return
    } else if (password.trim() === '') {
      error(ctx, '密码不能为空')
      return
    }
    const data = { username, password }
    const result = await adminService.login(data)
    if (result && result.id) {
      const payload = { username, password, id: result.id };
      const token = jwt.sign(payload, SECRET, { expiresIn: '10000000000000h' })
      ctx.status = 200
      ctx.body = {
        token,
        result
      }
      return
    }
    error(ctx, '用户不存在或者密码错误')
  },
  async register(ctx) {
    const interfaces = os.networkInterfaces()
    const ip = interfaces.WLAN[1].address
    const { username, password } = ctx.request.body
    if (username.trim() === '') {
      error(ctx, '用户名不能为空')
      return
    } else if (password.trim() === '') {
      error(ctx, '密码不能为空')
      return
    }
    const data = {
      username,
      password,
      ip,
      create_time: Date.now() / 1000
    }
    const result = await adminService.register(data)
    if (result.affectedRows) {
      success(ctx, result)
    } else {
      error(ctx, result.msg)
    }
  },
  async user(ctx) {
    const { name, page, size } = ctx.query
    const data = { name, page, size }
    const result = await adminService.user(data);
    ctx.body = result
  },
  async showSetting(ctx) {
    const result = await adminService.showSetting()
    ctx.body = result
  },
  async ad(ctx) {
    const result = await adminService.ad()
    ctx.body = result
  },
  async notice(ctx) {
    const result = await adminService.notice()
    ctx.body = result
  },
  async super(ctx) {
    const result = await adminService.super()
    ctx.body = result
  }
}
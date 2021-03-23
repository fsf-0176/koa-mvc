const { adminService } = require('../../service');
const { SECRET } = require('../../config'); // 获取配置文件密钥
const jwt = require('jsonwebtoken');
const payload = { user_name: 'Jack', id: 11, email: '123456@qq.com' };
const token = jwt.sign(payload, SECRET, { expiresIn: '1h' })
const os = require('os')
const  {error}  = require('../../utils/status')
module.exports = {
  async index(ctx) {
    const id = 8;
    console.log(123);
    const data = 1111
    //const data = await adminService.index(id);
    ctx.body = data
  },
  login(ctx) {
    console.log(99);
    ctx.body = {
      token
    }
  },
  async register(ctx) {
    const interfaces = os.networkInterfaces()
    const ip = interfaces.WLAN[1].address
    const { username, password } = ctx.request.body
    if (username.trim() === '') {
      error(ctx, { msg: '用户名不能为空' })
      return
    }else if(password.trim() === ''){
      error(ctx, { msg: '密码不能为空' })
      return
    }
    const data = {
      username,
      password,
      ip,
      create_time: Date.now() / 1000
    }
    await adminService.register(data)
    ctx.body = ctx.request.body
  }
}
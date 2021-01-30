const { adminService } = require('../../service');
const { SECRET } = require('../../config'); // 获取配置文件密钥
const jwt = require('jsonwebtoken');
const payload = { user_name: 'Jack', id: 11, email: '123456@qq.com' };
const token = jwt.sign(payload, SECRET, { expiresIn: '1h' })
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
  }
}
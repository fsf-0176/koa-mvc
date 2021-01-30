module.exports = {
  // jwt密钥
  SECRET: 'shared-secret',
  // 服务端口
  port: 3000,
  // jwt忽略验证路径
  verifyPath: [/^\/login/, /^\/register/],
  // 数据库配置
  database: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "gesida"
  }
}
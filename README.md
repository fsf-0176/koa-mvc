 # Koa架构思想
  - 分层 从浅到深
  - 1. router `负责发布业务逻辑给contorller`
  - 2. contorller `负责数据校验和页面状态返回`
  - 3. service `负责业务逻辑,和ctx没有关联了`
  - 4. model `负责数据库增删改查`
  - 5. database `负责连接数据库`

# 2021-01-29
  `第一次提交`
  
# 2021-01-30
  - 修改了app.js和Admin.contorll`添加了jwt验证`

# 2021-01-30
  - 添加了静态服务访问静态文件`koa-static`

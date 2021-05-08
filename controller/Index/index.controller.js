
const { indexService } = require('../../service')
module.exports = {
    async category(ctx) {
        const result = await indexService.category()
        ctx.body = result
    },
    async goods(ctx) {
        const { cid } = ctx.query
        const result = await indexService.goods({ cid })
        ctx.body = result
    },
    async goodsDetail(ctx) {
        const { id } = ctx.query
        const result = await indexService.goodsDetail({ id })
        ctx.body = result
    }
}
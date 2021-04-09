const { goodsService } = require('../../service')

module.exports = {
    async index(ctx) {
        const { page, name, size } = ctx.query
        const result = await goodsService.index({ page, name, size })
        ctx.body = result
    },
    async category(ctx) {
        const result = await goodsService.category()
        ctx.body = result
    },
    async specification(ctx) {
        const result = await goodsService.specification()
        ctx.body = result
    }
}
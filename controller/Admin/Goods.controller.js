const { goodsService } = require('../../service')

module.exports = {
    async index(ctx) {
        const { page, name } = ctx.query
        const result = await goodsService.index({page,name})
        ctx.body = result
    },
    async category(ctx){
        const result = await goodsService.category()
        ctx.body = result
    }
}
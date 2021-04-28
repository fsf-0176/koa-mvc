const { delGoods } = require('../../model/Admin/Goods.model')
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
    },
    async drop(ctx) {
        const { page, name, size } = ctx.query
        const result = await goodsService.drop({ page, name, size })
        ctx.body = result
    },
    async out(ctx) {
        const { page, name, size } = ctx.query
        const result = await goodsService.out({ page, name, size })
        ctx.body = result
    },
    async onsale(ctx) {
        const { page, name, size } = ctx.query
        const result = await goodsService.onsale({ page, name, size })
        ctx.body = result
    },
    async setGoodsStatus(ctx) {
        const { id, type, status } = ctx.request.body
        const result = await goodsService.setGoodsStatus({ id, type, status })
        ctx.body = result
    },
    async delGoods(ctx) {
        const { id } = ctx.request.body
        const result = await goodsService.delGoods({ id })
        ctx.body = result
    },
    async setOrder(ctx) {
        const { id, order } = ctx.request.body
        const result = await goodsService.setOrder({ id, order })
        ctx.body = result
    }
}
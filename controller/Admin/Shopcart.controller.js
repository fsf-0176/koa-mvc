const model = require('../../model')
const { shopcartService } = require('../../service')

module.exports = {
    async shopcart(ctx){
        const {page,name} = ctx.query
        const data = {page,name}
        const result = await shopcartService.shopcart(data)
        ctx.body = result
    }
}
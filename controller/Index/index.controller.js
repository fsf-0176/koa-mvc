
const { indexService } = require('../../service')
module.exports = {
    async category(ctx) {
        console.log(indexService);
        const result = await indexService.category()
        ctx.body = result
    }
}
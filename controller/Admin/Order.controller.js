const { orderService } = require('../../service');

module.exports = {
    async index(ctx){
 
        const {orderSn,consignee,status} = ctx.query;
        const data = {orderSn,consignee,status}
        const result = await orderService.index(data);
        ctx.body = result
    }
}
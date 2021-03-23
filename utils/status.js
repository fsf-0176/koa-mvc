module.exports = {
    error(ctx, msg) {
        ctx.status = 403
        ctx.body = {
            code: 4,
            msg
        }
    },
    success(ctx,msg){
        ctx.status = 200,
        ctx.body = {
            code: 2,
            msg
        }
    }
}
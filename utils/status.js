module.exports = {
    error(ctx, msg) {
        ctx.status = 403
        ctx.body = {
            code: 4,
            msg
        }
    }
}
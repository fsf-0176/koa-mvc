const { shopcartModel } = require('../../model')

module.exports = {
    shopcart(data){
        return shopcartModel.shopcart(data)
    }
}
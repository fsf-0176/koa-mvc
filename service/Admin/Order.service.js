const { orderModel} = require('../../model')

module.exports = {
    index(data){
        return orderModel.index(data)
    }
}